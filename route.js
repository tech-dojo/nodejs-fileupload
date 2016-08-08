module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('file-upload');
  });

  app.post('/file-upload', function(req, res) {
    var sampleFile;
    if (!req.files) {
      res.send('No files were uploaded.');
      return;
    }
    sampleFile = req.files;
    console.log(sampleFile);
    sampleFile.file.mv(__dirname + '/files/'+sampleFile.file.name, function(err) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.send('File uploaded!');
      }
    });
  });
}
