module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        typescript: {
            test: {
                src: ['test/**/*.ts', 'app/modules/*.ts'],
                dest: 'build',
                options: {
                    target: "es5",
                    basepath: ".",
                    sourceMap: true
                }
            }
        },
        karma: {
            unit: {
                options: {
                    configFile: 'karma.conf.js'
                }
            }
        },
        clean: {
            test: {
                src: ['build']
            }
        }
    });

    grunt.registerTask('test', ['clean:test', 'typescript:test', 'karma']);
    grunt.registerTask('default', ['test']);
};
