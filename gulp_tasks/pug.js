//import plugins
import {src, dest, gulp} from 'gulp';
import pug from 'gulp-pug';
import gulpif from 'gulp-if';
import notify from 'gulp-notify';

const emitty = require('emitty').setup('src/templates', 'pug');
const bs = require('browser-sync').create();

//import variables
import {dirs, sources} from './util/paths';

export const buildPug = () => {

    return src(sources.templates)
        .pipe(gulpif(global.watch, emitty.stream(global.emittyChangedFile)))
        .pipe(pug({pretty: true}))
        .pipe(dest(dirs.dest))
        .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(bs.stream());


    // new Promise((resolve, reject) => {
    //     emitty.scan(global.emittyChangedFile).then(() => {
    //         return src(sources.templates)
    //             .pipe(gulpif(global.watch, emitty.filter(global.emittyChangedFile)))
    //             .pipe(pug({ pretty: true }))
    //             .pipe(gulp.dest(dirs.dest))
    //             .on('end', resolve)
    //             .on('error', reject)
    //             .pipe(bs.stream());
    //     });
    // })

};
