const fs = require("fs");
const path = require("path");

const { PWD, TRAVIS_COMMIT } = process.env;

const filePath = path.join(
  PWD,
  "dist",
  "ng-bootstrap-form-validation",
  "package.json"
);

const packageJson = JSON.parse(fs.readFileSync(filePath, "utf8"));

const now = new Date();
const timeStr = now.toISOString().replace(/:|T|\.|-/g, "");
const commitVersion = `${packageJson.version}-dev.${timeStr}.${TRAVIS_COMMIT}`;

const updatedPackageJson = {
  ...packageJson,
  version: commitVersion
};

fs.writeFileSync(
  filePath,
  JSON.stringify(updatedPackageJson, undefined, 2),
  "utf8"
);
