/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

	grunt.config.set('concat', {
		dev: {			
			src: [
				'node_modules/jquery/dist/jquery.js',
				'node_modules/what-input/what-input.js',
				'node_modules/motion-ui/motion_ui.js',
				'node_modules/foundation-sites/js/foundation.core.js',
				'node_modules/foundation-sites/js/foundation.util.*.js',
				'node_modules/foundation-sites/js/foundation.*.js'						
			],
			dest: 'assets/js/dependencies/foundation.js'
		},
		production: {
			js: {
				src: require('../pipeline').jsFilesToInject,
				dest: '.tmp/public/concat/production.js'
			},
			css: {
				src: require('../pipeline').cssFilesToInject,
				dest: '.tmp/public/concat/production.css'
			}
		}		
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
