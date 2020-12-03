let http=require("http");
let targetHost=process.argv[2].split('/')[2];
let targetPath=process.argv[2].split(targetHost)[1];
let frequency=process.argv[3];
let requestsSent=0;
let responsesReceived=0;
  var options = {
    host:targetHost,
    path:targetPath
  };
  
  callback = function(response) {
    response.on('data', function (chunk) {
    });
  
    response.on('end', function () {
      responsesReceived++;
    });
  }
  setInterval(()=>{
    http.request(options, callback).end();
    requestsSent++;
    console.clear();
    console.log(`Requests : ${requestsSent}\nResponses : ${responsesReceived}\nULR : ${process.argv[2]}`);
  },frequency);
