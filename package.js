Package.describe({
  name: 'brunoalvesdefaria:meteoroid',
  version: '0.0.1',
  summary: 'Meteor form components for Blaze',
  git: 'https://github.com/brunoalvesdefaria/meteoroid',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.mainModule('src/main.js');
});

Package.onTest(function (api) {
  api.use([
    'ecmascript',
    'practicalmeteor:mocha',
    'practicalmeteor:chai',
    'brunoalvesdefaria:meteoroid'
  ], 'client');

  api.addFiles('tests/main.js', 'client');
});
