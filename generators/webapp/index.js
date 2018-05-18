const Generator = require('yeoman-generator');
const readdir = require('fs-readdir-recursive');

module.exports = class extends Generator {
  prompting() {
    return this
      .prompt([{
        type: 'input',
        name: 'accountName',
        message: 'Your account name',
        'default': this.user.git.name()
      }, {
        type: 'input',
        name: 'projectName',
        message: 'Your project name',
        'default': 'Example Module'
      }, {
        type: 'input',
        name: 'packageName',
        message: 'Your package name',
        'default': 'example-module'
      }, {
        type: 'input',
        name: 'codeName',
        message: 'Name in the code',
        'default': 'exampleModule'
      }])
      .then((answers) => {
        this.props = answers;
      });
  }

  writing() {
    const filesToCopy = readdir(this.sourceRoot(), () => true);
    const templateData = this.props;

    filesToCopy.forEach((fileName) => {
      this.fs.copyTpl(
        this.templatePath(fileName),
        this.destinationPath(fileName.replace(/^_/, '').replace(/_$/, '')),
        templateData
      );
    });
  }

  install() {
    this.log('npm install & npm install --only=dev');
    this.runInstall('npm');
    this.runInstall('npm', '', {
      only: 'dev'
    });
  }
};
