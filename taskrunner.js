import {join} from 'path';
import taskrunner from 'taskrunner';

taskrunner({
  taskName: process.argv.slice(2)[0],
  configPath: join(__dirname, './config'),
  projectRoot: __dirname,
  eslint: {
    configFile: join(__dirname, './config/eslintrc.json'),
    files: [join(__dirname, './src/js/*')],
  },
  sasslint: {
    configFile: join(__dirname, './config/sass-lint.yml'),
    files: join(__dirname, './src/scss/*'),
  },
  rollup: {
    configFile: join(__dirname, './config/rollup.json'),
  },
  uglify: {
    inputFile: join(__dirname, './dist/js/app.js'),
    outputFile: join(__dirname, './dist/js/app.min.js'),
  },
  babel: {
    configFile: join(__dirname, './config/babel.json'),
    inputFile: join(__dirname, './dist/js/app.js'),
    outputFile: join(__dirname, './dist/js/es5app.min.js'),
  },
  sass: {
    configFile: join(__dirname, './config/sass.json'),
  },
  clean: {
    files: [
      join(__dirname, './dist/css'),
      join(__dirname, './dist/js'),
    ],
  },
});