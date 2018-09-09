const fs = require("fs");
const path = require("path");

const { PWD } = process.env;

const readme = fs.readFileSync(path.join(PWD, "README.md"), "utf8");

fs.writeFileSync(
  path.join(PWD, "dist", "ng-bootstrap-form-validation", "README.md"),
  readme,
  "utf8"
);
