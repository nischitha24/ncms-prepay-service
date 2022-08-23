const fs = require('fs');
const yaml = require('js-yaml');
const { spawn } = require('child_process')


try {
    let fileContents = fs.readFileSync('./build_artifact.yml', 'utf8');
    let data = yaml.load(fileContents);
    console.log(data.docker_image.name);
    console.log(data.docker_image.tag);
    const name = data.docker_image.name;
    const tag = data.docker_image.tag;
    const backupProcess = spawn('docker',['build', '-t', `${name}:${tag}`, `.`
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


