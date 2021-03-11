const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync') .create();

// Подключаем модули gulp-sass
const sass = require('gulp-sass');
 
// Подключаем Autoprefixer
const autoprefixer = require('gulp-autoprefixer');
 
// Подключаем модуль gulp-clean-css
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concate');


function browsersync() {
        browserSync.init({ 
            server: { baseDir: 'app/' }, 
            notify: false, 
            online: true 
        })
    }
    function startWatch(){
        watch('app/**/*.html').on('change',browserSync.reload);
    }

function styles() {
    return src('app/' + 'scss' + '/style.' + 'scss' + '') 
    .pipe(sass()) 
    .pipe(concat('style.min.css')) 
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) 
    .pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } )) 
    .pipe(dest('app/css/'))
    .pipe(browserSync.stream()) 
}
	exports.styles = styles;

    
    exports.browsersync = browsersync;
    exports.default = parrallel(browsersync, startWatch);