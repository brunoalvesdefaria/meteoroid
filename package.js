Package.describe({
  name: 'brunoalvesdefaria:meteoroid',
  version: '0.0.1',
  summary: 'Meteor form components for Blaze',
  git: 'https://github.com/brunoalvesdefaria/meteoroid',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.2.3');
  api.use([
    'ecmascript',
    'templating'
  ]);
});

Package.onTest(function (api) {
  api.use([
    'ecmascript',
    'templating',
    'practicalmeteor:mocha',
    'practicalmeteor:chai',
    'brunoalvesdefaria:meteoroid'
  ], 'client');
  api.addFiles([
    'tests/mocha/main.js',
    'tests/playground/body.html',
    'tests/playground/content.html',
    'tests/playground/content.js'
  ], 'client');
});
