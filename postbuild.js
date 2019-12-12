/* eslint-disable */
const path = require("path");
const fs = require("fs").promises;

async function replace() {
  const placeholder = '<meta type="google-analytics">';
  const indexPath = path.resolve(__dirname, "./dist/index.html");
  const html = await fs.readFile(indexPath);
  const code = await fs.readFile(path.resolve(__dirname, "./public/ga/analytics.html"));
  const replaced = html.toString().replace(placeholder, code);
  fs.writeFile(indexPath, replaced);
}

replace();
