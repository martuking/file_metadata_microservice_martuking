var express = require('express');
var multer  = require('multer');
var cors = require('cors');
var bodyparser = require('body-parser');
var app = express();
var upload = multer({ dest: 'uploads/' });
app.use(bodyparser.json());
app.use(cors());
app.use(express.static(__dirname + '/views'));
/*app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});*/
app.post('/upload',upload.single('file'),function(request,response,next){
return response.json(request.file)
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
