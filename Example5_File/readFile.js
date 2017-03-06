const http = require("http"),
      fs = require("fs");

  fs.readFile("./index.html",(err, data)=>{
    http.createServer((req, res)=>{
      res.write(data);
      res.end();
  }).listen(8083);
});
