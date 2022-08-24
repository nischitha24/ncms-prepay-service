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
    const releaseTag = '/'+releasetag[2];
    const backupProcess = spawn('docker',['build', '-t', `${name+releaseTag}:${tag}`,`.` , 
    ]);
    backupProcess.stdout.on('data', (data) => {
        console.log('stdout:\n', data);
      });
    backupProcess.on('error', (error) => {
        console.log('error:\n', error);
      });
  } catch (e) {
    console.log(e);
  }  


