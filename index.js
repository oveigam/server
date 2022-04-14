const express = require("express");
const fs = require("fs");

const app = express();
app.setMaxListeners(0);

app.use(express.static("public"));

const getLink = (file) => {
  return `
    <li>
        <a href="/${file}">${file}</>
    </li>
    `;
};

app.use("/", (req, res) => {
  fs.readdir("./public", (err, files) => {
    res.send(`
            <ul style="font-size: 4rem">
                ${files.map(getLink).join("")}
            </ul>
        `);
  });
});

app.listen(8085, () => {
  console.log("conectad");
});
