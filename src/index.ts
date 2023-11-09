const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sever = require("http").createServer(app);
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.json({ GitHub: "https://github.com/phuockaito/kaito-music.cf", Live_Demo: "https://kaito-music.vercel.app" });
})


sever.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
});