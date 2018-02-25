var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var fs = require("fs");
var stringifyFile = [];

app.use(bodyParser.json());

app.get("/getNote", function(req, res) {
  console.log("Otrzymałem żadanie GET do strony /getNote");
  fs.readFile("./test.json", "utf8", function(err, data) {
    if (err) throw err;
    stringyfyFile = data;
    res.send(data);
  });
});

app.post("/updateNote/:note", function(req, res) {
  console.log(
    "Otrzymałem żadanie POST do strony /updateNote/" + req.params.note
  );
  stringifyFile += req.params.note;

  fs.writeFile("./test.json", stringifyFile, function(err) {
    if (err) throw err;
    console.log("file updated");
    res.send("Dopisano: " + req.params.note);
  });
});

// app.get('/', function(req, res) {
//   console.log('Otrzymałem żadanie GET do strony głównej')
//   res.send('Hello GET!');
// });

// app.get('/test:id', function(req, res) {
//   console.log('Otrzymałem żadanie GET do strony głównej')
//   res.send('Identyfikator, który został dopisany to ' + req.params.id);
// });

// app.delete('/del_user', function(req, res) {
//   console.log('Otrzymałem żadanie DELETE do strony /del_user');
//   res.send('Hello DELETE!');
// });

// app.get('/list_user', function(req, res){
//   console.log('Otrzymalem żadanie GET od strony /list_user');
//   res.send('Strona z lista użytkowników!');
// });

// app.get('/ab*cd', function(req, res) {
//   console.log('Otrzymałem żadanie GET od strony /ab*cd');
//   res.send('Wzór pasuje!');
// });

// app.use(function (req, res, next) {
//     res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
// });

var server = app.listen(3000, function() {
  console.log("Przykładowa aplikacja nasłuchuje na http://localhost:3000");
});
