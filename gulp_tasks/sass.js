//import plugins
import {src, dest, gulp} from 'gulp';
import sass from 'gulp-sass';
import gulpif from 'gulp-if';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';
import cleancss from 'gulp-clean-css';
import sassGlob from 'gulp-sass-glob';
import bs from 'browser-sync';

//import variables
import {production, dirs} from './util/paths';

// task
export const buildSass = () => {

    return src(dirs.src + '/sass/manifest.sass')

        .pipe(sassGlob())

        .pipe(sass({
            indentedSyntax: true,
            cache: false,
            includePaths: require('node-normalize-scss').includePaths
        }))

        .on('error', notify.onError("Error: <%= error.message %>"))

        .pipe(autoprefixer({
            browsers: ['> 0%']
        }))

        // development
        .pipe(gulpif(!production, dest(dirs.dest + '/css/')))

        // production
        .pipe(gulpif(production, cleancss()))
        .pipe(gulpif(production, dest(dirs.destProduction + '/css/')))
        .pipe(bs.stream());

};