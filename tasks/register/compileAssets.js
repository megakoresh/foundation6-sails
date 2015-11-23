module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'sass:dev',
		'concat:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
