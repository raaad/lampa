const fs = require("fs");

const data = fs.readFileSync("./main.min.css", { encoding: "utf8", flag: "r" });

fs.writeFileSync("./css.js", `const styleBody = '${data}';`);