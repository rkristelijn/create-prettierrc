const kikiConfig = {
  endOfLine: 'lf',
  multilineArraysWrapThreshold: 2,
  overrides: [
    {
      files: ['*.cjs', '*.d.ts', '*.js', '*.mjs', '*.ts'],
      options: {
        printWidth: 256,
        singleQuote: true,
        semi: true,
        useTabs: true,
        tabWidth: 4,
      },
    },
    {
      files: ['*.css', '*.sass', '*.scss'],
      options: {
        semi: true,
        useTabs: true,
        tabWidth: 4,
      },
    },
    {
      files: ['*.htm', '*.html', '*.vue'],
      options: {
        printWidth: 128,
        singleQuote: true,
        semi: true,
        useTabs: true,
        tabWidth: 4,
      },
    },
    {
      files: ['*.json', '*.jsonc'],
      options: {
        useTabs: false,
        tabWidth: 2,
      },
    },
  ],
  plugins: ['prettier-plugin-multiline-arrays'],
  semi: false,
  trailingComma: 'none',
};

module.exports = defaultConfig;
