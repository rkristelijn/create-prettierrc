#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { defaultConfig, allConfig, apsConfig } = require('./config');

const args = process.argv.slice(2);
const useAllConfig = args.includes('--all');
const useApsConfig = args.includes('--aps');

let prettierConfig;

switch (true) {
  case useAllConfig:
    prettierConfig = allConfig;
    break;
  case useApsConfig:
    prettierConfig = apsConfig;
    break;
  default:
    prettierConfig = defaultConfig;
}

const filePath = path.join(process.cwd(), '.prettierrc');

fs.writeFile(filePath, JSON.stringify(prettierConfig, null, 2) + '\n', (err) => {
  if (err) {
    console.error('Error writing .prettierrc file:', err);
    console.log('Usage: npx create-prettierrc [--all | --aps]');
    process.exit(1);
  }
  console.log('.prettierrc file has been generated successfully.');
  console.log('Generated configuration:', prettierConfig);
});
