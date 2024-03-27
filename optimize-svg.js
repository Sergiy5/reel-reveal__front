
const chokidar = require('chokidar');
const { exec } = require('child_process');

const watcher = chokidar.watch('path/to/svg/folder');

watcher.on('add', path => {
  console.log(`File ${path} has been added`);
  exec('npm run optimize-svg', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error optimizing SVG: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`SVGO error: ${stderr}`);
      return;
    }
    console.log(`SVG optimized successfully: ${stdout}`);
  });
});

console.log('Watching for changes in SVG folder...');

    //  "optimize-svg": "svgo --config=svgo.config.js --folder=../src/assets/images/svgs --output=../src/assets/images/svgsOutput"
