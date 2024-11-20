import figlet, {type Fonts} from "figlet";

/**
 * Asynchronously retrieve a list of all available Figlet fonts.
 *
 * @returns {Promise<string[]>} A promise that resolves with a list of all available Figlet fonts.
 */
export const getFonts = (): Promise<string[]> =>
    new Promise((resolve, reject) => {
        figlet.fonts((err, fonts) => {
            if (err) {
                return reject(err);
            }
            resolve(fonts || []);
        });
    });

/**
 * Generates a figlet text with the given `text` and `font`.
 * @param {string} text The text to generate.
 * @param {string} font The font to use.
 * @returns {Promise<string>} A promise that resolves with the generated figlet text.
 */
export const generateText = (text: string, font: string): Promise<string> =>
    new Promise((resolve, reject) => {
        figlet.text(text, {font: font as Fonts}, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result || "");
        });
    });

const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        let body = "";
        try {
            const fonts = await getFonts(); // Получаем список всех шрифтов

            for (const font of fonts) {
                const resultText = await generateText("Bun server is running!", font);
                body += `Font: ${font}\n${resultText}\n\n`;
            }
        } catch (err) {
            console.error("Error generating text:", err);
            return new Response("Error generating text.", {status: 500});
        }

        return new Response(body, {
            headers: {"Content-Type": "text/plain"},
        });
    },
});

console.log(`Started on ${server.protocol}://${server.hostname}:${server.port} ...`);
