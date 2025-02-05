# Create Prettier Config

## Why this project

This project is designed to quickly initialize a `.prettierrc` file with sensible defaults using a single command. It simplifies the process of setting up Prettier in your project by providing a pre-configured `.prettierrc` file.

## Prettier Configuration

For more information on Prettier configuration options, please refer to the [Prettier documentation](https://prettier.io/docs/en/options.html).

## Usage

You can generate a `.prettierrc` file with different configurations using the following commands:

- Default configuration:
  ```sh
  npx create-prettierrc
  ```

- All options configuration:
  ```sh
  npx create-prettierrc --all
  ```

- APS configuration:
  ```sh
  npx create-prettierrc --aps
  ```

- [kiki-kanri](https://github.com/kiki-kanri/prettierrc) configuration:
  ```sh
  npx create-prettierrc --kiki
  ```

## Sensible Defaults

The generated `.prettierrc` file includes the following default settings:

- `semi`: `true` - Add a semicolon at the end of every statement.
- `singleQuote`: `true` - Use single quotes instead of double quotes.
- `trailingComma`: `'es5'` - Print trailing commas wherever possible in ES5 (objects, arrays, etc.).
- `printWidth`: `80` - Specify the line length that the printer will wrap on.
- `tabWidth`: `2` - Specify the number of spaces per indentation level.

## All settings with defaults

The generated `.prettierrc` file includes the following settings:

- `arrowParens`: `'always'` - Always include parens in arrow functions.
- `bracketSpacing`: `true` - Print spaces between brackets in object literals.
- `embeddedLanguageFormatting`: `'auto'` - Control whether Prettier formats quoted code embedded in the file.
- `endOfLine`: `'lf'` - Specify the end of line character.
- `htmlWhitespaceSensitivity`: `'css'` - Specify the global whitespace sensitivity for HTML files.
- `insertPragma`: `false` - Insert a special @format marker at the top of files.
- `jsxBracketSameLine`: `false` - Put the `>` of a multi-line JSX element at the end of the last line.
- `jsxSingleQuote`: `false` - Use single quotes in JSX.
- `printWidth`: `80` - Specify the line length that the printer will wrap on.
- `proseWrap`: `'preserve'` - Control how Prettier wraps markdown text.
- `quoteProps`: `'as-needed'` - Change when properties in objects are quoted.
- `requirePragma`: `false` - Require a special @format marker to be present in the file.
- `semi`: `true` - Add a semicolon at the end of every statement.
- `singleQuote`: `true` - Use single quotes instead of double quotes.
- `tabWidth`: `2` - Specify the number of spaces per indentation level.
- `trailingComma`: `'es5'` - Print trailing commas wherever possible in ES5 (objects, arrays, etc.).
- `useTabs`: `false` - Indent lines with tabs instead of spaces.
- `vueIndentScriptAndStyle`: `false` - Indent script and style tags in Vue files.

## APS Group sensible defaults

The generated `.prettierrc` file includes the following settings:

- `arrowParens`: `'always'` - Always include parens in arrow functions.
- `bracketSpacing`: `true` - Print spaces between brackets in object literals.
- `endOfLine`: `'lf'` - Specify the end of line character.
- `jsxSingleQuote`: `true` - Use single quotes in JSX.
- `printWidth`: `120` - Specify the line length that the printer will wrap on. Since screens get bigger, the 80 doesn't make sense anymore
- `proseWrap`: `'always'` - Control how Prettier wraps markdown text.
- `semi`: `true` - Add a semicolon at the end of every statement.
- `singleQuote`: `true` - Use single quotes instead of double quotes.
- `tabWidth`: `2` - Specify the number of spaces per indentation level.
- `trailingComma`: `'all'` - Print trailing commas wherever possible.
- `useTabs`: `false` - Indent lines with tabs instead of spaces.

## Kiki Kanri defaults

The generated `.prettierrc` file includes the following settings:

- `endOfLine`: `'lf'` - Specify the end of line character.
- `multilineArraysWrapThreshold`: `2` - Specify the number of elements in an array before wrapping.
- `overrides`: - Specify different configurations for different file types.
  - For JavaScript and TypeScript files:
    - `printWidth`: `256` - Specify the line length that the printer will wrap on.
    - `singleQuote`: `true` - Use single quotes instead of double quotes.
    - `semi`: `true` - Add a semicolon at the end of every statement.
    - `useTabs`: `true` - Indent lines with tabs instead of spaces.
    - `tabWidth`: `4` - Specify the number of spaces per indentation level.
  - For CSS, Sass, and SCSS files:
    - `semi`: `true` - Add a semicolon at the end of every statement.
    - `useTabs`: `true` - Indent lines with tabs instead of spaces.
    - `tabWidth`: `4` - Specify the number of spaces per indentation level.
  - For HTML and Vue files:
    - `printWidth`: `128` - Specify the line length that the printer will wrap on.
    - `singleQuote`: `true` - Use single quotes instead of double quotes.
    - `semi`: `true` - Add a semicolon at the end of every statement.
    - `useTabs`: `true` - Indent lines with tabs instead of spaces.
    - `tabWidth`: `4` - Specify the number of spaces per indentation level.
  - For JSON and JSONC files:
    - `useTabs`: `false` - Indent lines with tabs instead of spaces.
    - `tabWidth`: `2` - Specify the number of spaces per indentation level.
- `plugins`: `['prettier-plugin-multiline-arrays']` - Use the Prettier plugin for multiline arrays.
- `semi`: `false` - Do not add a semicolon at the end of every statement.
- `trailingComma`: `'none'` - Do not print trailing commas.

