const fs = require("fs");

const { PWD, TRAVIS_COMMIT } = process.env;

const packageJson = JSON.parse(
  fs.readFileSync(path.join(PWD, "dist", "package.json"), "utf8")
);

const now = new Date();
const timeStr = now.toISOString().replace(/:|T|\.|-/g, "");
const commitVersion = `${packageJson.version}-dev.${timeStr}.${TRAVIS_COMMIT}`;

const updatedPackageJson = {
  ...packageJson,
  version: commitVersion
};

fs.writeFileSync(
  path.join(PWD, "dist", "package.json"),
  JSON.stringify(updatedPackageJson, undefined, 2),
  "utf8"
);
