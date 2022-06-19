// Local Server start
var fs = require('fs');

var express = require('express');
var bodyParser = require('body-parser');
var upload = require('express-fileupload');

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(upload());

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.post('/download', urlencodedParser, function(req, res) {
  if(req.files){
    console.log(req.files);


    var file1 = req.files.file1;
    var filename1 = file1.name;
    file1.mv('./uploads/' + filename1);
    console.log(filename1);

    var file2 = req.files.file2;
    var filename2 = file2.name;
    file2.mv('./uploads/' + filename2);
    console.log(filename2);


    setTimeout(function(){
      var fileResult = fs.readFileSync('./uploads/' + filename1, 'utf8') + '\n' + fs.readFileSync('./uploads/'+ filename2, 'utf8');
      console.log("\n Text of your file: \n" + fileResult);
      fs.writeFileSync('./public/mergedFileResult.txt', fileResult);
      res.render('download', {filename1, filename2});
    }, 1000);


  }
});



app.listen(4000);
