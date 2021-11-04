let express = require('express');
let app = express();

app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + '/public/style.css');
});

app.get('/script.js', function (req, res) {
    res.sendFile(__dirname + '/public/script.js');
});

let clientInfo;
app.post("/api", (request, response) => {
  clientInfo = request.body;
});

let server = app.listen(8080, function () {
    console.log('Node server is running..');
});