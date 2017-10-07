const Generator = require('yeoman-generator');
const readdir = require('fs-readdir-recursive');

module.exports = class extends Generator {
  // prompting() {
  //   const done = this.async();
  //
  //   this.prompt({
  //     type: 'input',
  //     name: 'githubUser',
  //     message: 'Your github account',
  //     'default': ''
  //   }, {
  //     type: 'input',
  //     name: 'projectName',
  //     message: 'Your project name',
  //     'default': ''
  //   }, {
  //     type: 'input',
  //     name: 'packageName',
  //     message: 'Your package name',
  //     'default': ''
  //   }, (answers) => {
  //     this.props = answers;
  //     this.log(answers.name);
  //     done();
  //   });
  // }

  _getTemplateData() {
    return {
      githubUser: 'autioch',
      projectName: 'Test Application',
      packageName: 'test-application'
    };

    // return this.props;
  }

  wrting() {
    const filesToCopy = readdir(this.sourceRoot());
    const templateData = this._getTemplateData();

    filesToCopy.forEach((fileName) => {
      this.fs.copyTpl(
        this.templatePath(fileName),
        this.destinationPath(fileName.replace(/^_/, '')),
        templateData
      );
    });
  }

  install() {
    this.installDependencies({
      yarn: false,
      npm: true,
      bower: false
    });
  }
};
