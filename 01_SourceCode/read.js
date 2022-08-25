const fs = require('fs');
const yaml = require('js-yaml');
const { spawn } = require('child_process')
var releasetag = process.argv ;
console.log(releasetag);
try {
    let fileContents = fs.readFileSync('./build_artifact.yml', 'utf8');
    let data = yaml.load(fileContents);
    console.log(data.docker_image.name);
    console.log(data.docker_image.tag);
    console.log(releasetag[2]);
    const name = data.docker_image.name;
    const tag = data.docker_image.tag;
    const tagArray = JSON.stringify(releasetag[2]).split("/")
    var version = "0"
    if(tagArray.length == 1){
      version = tagArray[0]
    }
    else{
      version = tagArray[2]
    }
    const backupProcess = spawn('docker',['build', '-t', `${name}:${tag+version.substring(0,version.length - 1)}`,`.` , 
    ]);
    backupProcess.stdout.on('data', (data) => {
        console.log('stdout:\n', data);
      });
    backupProcess.stderr.on('data', (error) => {
        console.log('error:\n', error);
      });
  } catch (e) {
    console.log(e);
  }  


