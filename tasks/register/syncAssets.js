module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'jst:dev',
		'sass:dev',
		'concat:dev',
		'sync:dev',
		'coffee:dev'
	]);
};
