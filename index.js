const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const xmltoJson = require("xml2js");

const app = express();
const PORT = 3002;

app.use(bodyParser.text());

// Endpoint para leer XML pasado en el body y pasarlo a JSON
app.post("/jsonFromBody", (req, res) => {
  try {
    var parser = new xmltoJson.Parser();
    parser.parseString(req.body, function (err, result) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      const simplifiedResult = result.response.row.map((item) => {
        res.json(item);
      });
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.get("/jsonFromFile", (req, res) => {
  try {
    const filePath = "data/centros.xml";
    const data = fs.readFileSync(filePath, "utf8");
    var parser = new xmltoJson.Parser();
    parser.parseString(data, function (err, result) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const simplifiedResult = result.response.row.map((item) => {
        res.json(item);
      });
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
