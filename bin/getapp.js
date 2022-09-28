#! /usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const ProgressBar = require('progress')


if (process.argv.length < 3) {
    console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
    console.log('❌ You have to provide a name to your app.');
    console.log('❌ For example :');
    console.log('❌ " npx create-leaf-container my-app " ');
    console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
    process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = 'https://github.com/aframson/leafjs.git';

try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log(`❌❌ The file ${projectName} already exist in the current directory, please give it another name.`);

    } else {
      console.log(err);
    }
    process.exit(1);
  }

  async function main() {
    try {
      console.log('Downloading files...');
      execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);
      process.chdir(projectPath);
      console.log('Installing dependencies...');
      execSync('npm update --save');
      console.log('Removing useless files');
      execSync('npx rimraf ./.git');
      // fs.rmdirSync(path.join(projectPath, 'bin'), { recursive: true});
      fs.rm(path.join(projectPath, 'bin'),()=>{},{ recursive: true })
      
      console.log('🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿')
      console.log('🌿')
      console.log('🌿  The installation is done, leafjs is ready to use ');
      console.log(`🌿  cd  /${projectName}, then `);
      console.log(`🌿  run 'npm run fast' : to run with nodemon hot reload (development)`);
      console.log(`🌿  or `);
      console.log(`🌿  run 'npm run start' : to run (production)`);
      console.log('🌿')
      console.log('🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿')

    } catch (error) {
      console.log(error);
    }
}




  main();