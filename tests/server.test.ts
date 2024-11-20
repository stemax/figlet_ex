import {describe, test, expect} from "bun:test";
import {getFonts, generateText} from "../server";

describe("getFonts", () => {
    test("returns a list of fonts", async () => {
        const fonts = await getFonts();
        expect(fonts.length).toBeGreaterThan(0);
    });
});

describe("test for generateText", () => {
    test("generates text for a valid font", async () => {
        const text = await generateText("Hello", "Morse");
        expect(text).toBe(".... . .-.. .-.. --- ");
    });
});
