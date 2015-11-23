// tasks/config/scss.js
// --------------------------------
// Sass configuration

module.exports = function(grunt) {

  // We use the grunt.config api's set method to configure an
  // object to the defined string. In this case the task
  // 'sass' will be configured based on the object below.
  grunt.config.set('sass', {
    dev: {
		options: {
		  outputStyle: 'nested', //Set your prefered style for development here.
		  includePaths: [
			'node_modules/foundation-sites/scss',
			'node_modules/motion-ui/src'
		  ],
		  sourceMap: true
		},		
		files: [
		{
		  expand: true,
		  cwd: 'assets/styles/',
		  src: ['*.scss', '*.sass'],
		  dest: '.tmp/public/styles/',
		  ext: '.css'
		}, 
		{
		  expand: true,
		  cwd: 'assets/linker/styles/',
		  src: ['*.scss', '*.sass'],
		  dest: '.tmp/public/linker/styles/',
		  ext: '.css'
		}]			
	}
  });

  // load npm module for sass.  
  require('load-grunt-tasks')(grunt);
};