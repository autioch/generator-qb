const Generator = require('yeoman-generator');
const readdir = require('fs-readdir-recursive');

module.exports = class extends Generator {
  writing() {
    const filesToCopy = readdir(this.sourceRoot(), () => true);

    filesToCopy.forEach((fileName) => {
      this.fs.copy(
        this.templatePath(fileName),
        this.destinationPath(fileName.replace(/^_/, '').replace(/_$/, ''))
      );
    });
  }
};
