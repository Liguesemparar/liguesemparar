module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		htmlmin:
		{
			dist:
			{
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'dist/index.html': 'dist/index.html'
				}
			}
		},

		copy: {
			images: {
				cwd: 'src',
				src: 'images/*',
				dest: 'dist/',
				expand: true
			},
			html: {
				cwd: 'src/',
				src: 'index.html',
				dest: 'dist/',
				expand: true
			}
		},

		useminPrepare: {
			html: 'src/index.html',
		},

		usemin: {
			html: 'dist/index.html',
			options: {
				dest: 'dist'
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src: [
					'css/*.css',
					'*.html'
					]
				},
				options: {
					watchTask: false,
					server: {
						baseDir: './'
					}
				}
			}
		},

		clean: {
			dist: {
				src: ['dist', '.tmp']
			}
		},


	});

	grunt.registerTask('default', ['debug']);	
	
	grunt.registerTask('debug', [
		'browserSync:dev'
	]);

	grunt.registerTask('build', [ 
		'clean',
		'copy',
		'useminPrepare',
		'concat:generated',
		'uglify:generated',
		'cssmin:generated',
		'usemin',
		'htmlmin'
	]);
};