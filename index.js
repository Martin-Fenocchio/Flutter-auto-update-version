const YAML = require("yaml");
const fs = require("fs");
require("dotenv").config();

const filePath = process.env.pubspecPath;
const file = YAML.parse(fs.readFileSync(filePath, "utf8"));

const appVersionStringify = file.version;

const lastNumberIndex = appVersionStringify.indexOf("+");
const appVersionNow = appVersionStringify.substring(4, lastNumberIndex);

const newVersion = parseInt(appVersionNow) + 1;

file.version = appVersionStringify.replace(appVersionNow, newVersion);

fs.writeFile(filePath, YAML.stringify(file), (err) => {});
