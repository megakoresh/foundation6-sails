module.exports = function (grunt) {
	grunt.registerTask('buildProd', [
		'compileAssets',
		'concat:production',
		'uglify',
		'cssmin',
		'linkAssetsBuildProd',
		'clean:build',
		'copy:build'
	]);
};
