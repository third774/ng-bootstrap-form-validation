const fs = require("fs");
const path = require("path");

const { PWD, TRAVIS_COMMIT, TRAVIS_TAG } = process.env;

const filePath = path.join(
  PWD,
  "dist",
  "ng-bootstrap-form-validation",
  "package.json"
);

const buildPackageJson = JSON.parse(fs.readFileSync(filePath, "utf8"));
const projectPackageJson = JSON.parse(
  fs.readFileSync(path.join(PWD, "package.json"), "utf8")
);

const { version, repository, keywords } = projectPackageJson;

const now = new Date();
const timeStr = now.toISOString().replace(/:|T|\.|-/g, "");
const devVersion = `${
  projectPackageJson.version
}-dev.${timeStr}.${TRAVIS_COMMIT}`;

const updatedPackageJson = {
  ...buildPackageJson,
  repository,
  keywords,
  version: TRAVIS_TAG ? projectPackageJson.version : devVersion
};

fs.writeFileSync(
  filePath,
  JSON.stringify(updatedPackageJson, undefined, 2),
  "utf8"
);
