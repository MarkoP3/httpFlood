let https=require("https");
let url=process.argv[2];
let frequency=process.argv[3];
let requestsSent=0;
let responsesReceived=0;
setInterval(()=>{
  https.get(process.argv[2], (response)=>refreshTerminalOutput(requestsSent,++responsesReceived,url));
  refreshTerminalOutput(++requestsSent,responsesReceived,url);
},frequency);

function refreshTerminalOutput(rs,rr,url)
{
  console.clear();
  console.log(`Requests : ${rs}\nResponses : ${rr}\nULR : ${url}`);
}
