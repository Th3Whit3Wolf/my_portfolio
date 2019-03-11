module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			css: {
				src: 'src/css/main.css',
				dest: 'minified/css/main.css'
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-cssmin')
	grunt.registerTask('default', ['cssmin'])
}
