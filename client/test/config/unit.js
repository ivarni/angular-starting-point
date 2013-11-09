basePath = '../..';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'vendor/jquery/jquery.js',
    'vendor/angular/angular.js',
    'vendor/angular/angular-route.js',
    'test/vendor/angular/angular-mocks.js',
    'vendor/angular-ui/**/*.js',
    'src/**/*.js',
    'test/unit/**/*.spec.js',
    'dist/templates/**/*.js'
];

reporters = 'progress';

port = 8089;

runnterPort = 9109;

urlRoot = '/__test/';

colors = true;

logLevel = LOG_INFO;

autoWatch = false;

autoWatchInterval = 0;

browsers = ['Chrome'];

singleRun = true;