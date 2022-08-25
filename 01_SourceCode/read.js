const fs = require('fs');
const yaml = require('js-yaml');
const { spawn } = require('child_process')
var releasetag = process.argv ;
console.log(releasetag);
console.log(typeof(releasetag))
try {
    let fileContents = fs.readFileSync('./build_artifact.yml', 'utf8');
    let data = yaml.load(fileContents);
    console.log(data.docker_image.name);
    console.log(data.docker_image.tag);
    console.log(releasetag[2]);
    const name = data.docker_image.name;
    const tag = data.docker_image.tag;
    const tagArray = JSON.stringify(releasetag).split("/")
    const version = tagArray[2];
    const backupProcess = spawn('docker',['build', '-t', `${name}:${tag+version}`,`.` , 
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


