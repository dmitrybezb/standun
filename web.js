var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
<<<<<<< HEAD
  response.send('Hello World2!');
=======
  response.send('Hello World!');
>>>>>>> d92b0b3265f0f609324c35e03c19c7e59b39a061
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
