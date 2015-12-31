'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the terrific ' + chalk.red('generator-ng-2-meteor') + ' generator!'
            ));

        var prompts = [
        {
            type: 'inputs',
            name: 'appName',
            message: 'What is the name of the app?',
            default: 'DemoApp01'
        }];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.someOption;

            done();
        }.bind(this));
    },

  writing: {
    meteor: function () {
      this.fs.copy(
        this.templatePath('.meteor/packages'),
        this.destinationPath('.meteor/packages')
      );
     this.fs.copy(
        this.templatePath('.meteor/release'),
        this.destinationPath('.meteor/release')
      );
    },

    clientfiles: function () {
      this.fs.copyTpl(
        this.templatePath('client/app.html'),
        this.destinationPath('client/app.html'),
        { appName: this.props.appName }
      );
      this.fs.copyTpl(
        this.templatePath('client/app.ts'),
        this.destinationPath('client/app.ts'),
        { appName: this.props.appName }
      );
      this.fs.copy(
        this.templatePath('client/style.css'),
        this.destinationPath('client/style.css')
      );
    },
    
    serverfiles: function() {
      this.fs.copy(
        this.templatePath('server/app.ts'),
        this.destinationPath('server/app.ts')
      );
    }
  },


    install: function () {
        this.spawnCommand('meteor', ['update']);
    }

    
});
