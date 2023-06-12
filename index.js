const YAML = require("yaml");
const fs = require("fs");
const notifier = require("node-notifier");
require("dotenv").config();

const filePath = process.env.pubspecPath;

const file = YAML.parse(fs.readFileSync(filePath, "utf8"));

const segments = file.version.split(".");

const lastSegment = segments[segments.length - 1].split("+");

lastSegment[0] = (parseInt(lastSegment[0]) + 1).toString();

segments[segments.length - 1] = lastSegment.join("+");

file.version = segments.join(".");

fs.writeFile(filePath, YAML.stringify(file), (err) => {});

notifier.notify(
  {
    title: "New version!",
    message: "The number of the new version is: " + lastSegment[0].toString(),
  },
  (err, response, metadata) => {
    if (err) {
      console.error(err);
      return;
    }
  }
);
