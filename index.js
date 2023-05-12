const YAML = require("yaml");
const fs = require("fs");
const notifier = require("node-notifier");
require("dotenv").config();

const filePath = process.env.pubspecPath;

const file = YAML.parse(fs.readFileSync(filePath, "utf8"));

const appVersionStringify = file.version;

const lastNumberIndex = appVersionStringify.indexOf("+");
const appVersionNow = appVersionStringify
  .substring(4, lastNumberIndex)
  .replaceAll(".", "");

const newVersion = parseInt(appVersionNow) + 1;

file.version = appVersionStringify.replace(appVersionNow, newVersion);

fs.writeFile(filePath, YAML.stringify(file), (err) => {});

notifier.notify(
  {
    title: "Nueva version!",
    message: "La nueva version es la " + newVersion.toString(),
  },
  (err, response, metadata) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Notificación enviada:", response, metadata);
  }
);
