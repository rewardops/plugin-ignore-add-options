const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { version } = require('./package.json');

const file = path.resolve(`./ignore-add-options-${version}.js`);

fs.copyFile('./index.js', file, (copyError) => {
  if (copyError) {
    throw copyError;
  }

  exec(`yarn plugin import ${file}`, (execError, stdout, stderr) => {
    if (execError) {
      console.error(`error: ${execError.message}`);
      return; // stop here
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return; // stop here
    }

    fs.rmSync(file);
  });
});
