#!/usr/bin/env node

var spawn = require('child_process').spawn;

var command = /^win/.test(process.platform) ? 'spacejam.cmd' : 'spacejam';

var child = spawn(command, [
  'test-packages', './',
  '--driver-package=practicalmeteor:mocha-console-runner',
  '--phantomjs-options "--hooks ./tests/phantom_hooks.js"'
]);

// Log the suprocess stdout entries
child.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
});

// Log the subproccess stderr entries
child.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
});

child.on('close', function (code) {
  console.log('Mocha process exited with code ' + code);
  if (code > 0) {
    process.exit(1);
  }
});
