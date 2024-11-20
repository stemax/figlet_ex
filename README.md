# figlet_ex README

This project demonstrates how to use the `figlet` library with Bun to generate ASCII art text. 
It includes a simple server that generates ASCII art using all available fonts.

## How to Use
### Run the server:

Start the Development Server
Run the following command to start the server with hot reloading:

```bash
bun dev
```

### Build the server

Start the Production Server
Run the server in production mode:
```bash
bun start
```
The server will start on http://localhost:3000. 
When accessed, it will generate ASCII art for the text Bun server is running! using all available fonts.

## Testing
This project includes tests for font retrieval and text generation.

Run Tests
```bash
bun test
```

## API Reference
```getFonts(): Promise<string[]>```
Retrieves a list of all available Figlet fonts.

```generateText(text: string, font: string): Promise<string>```
Generates ASCII art for a given text using the specified font.

#### Parameters:
```
text: The text to generate.
font: The font to use.
Returns: A promise that resolves with the generated ASCII art.
```

## Dependencies
```figlet: Library for generating ASCII art text.
@types/figlet: TypeScript types for figlet.
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
