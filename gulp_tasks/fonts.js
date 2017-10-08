//import plugins
import {src, dest, gulp, series} from 'gulp';
import gulpif from 'gulp-if';
import inject from 'gulp-inject';

//import variables
import { dirs, production } from './util/paths';

export const fontsCss = () => {
  return src(dirs.src + '/fonts/fonts.css')
    .pipe(gulpif(!production, dest(dirs.dest + '/css/')))
    .pipe(gulpif(production, dest(dirs.destProduction + '/css/')))

};

export const fontsJs = () => {
  return src(dirs.src + '/fonts/fonts.js')
    .pipe(gulpif(!production, dest(dirs.dest + '/js/')))
    .pipe(gulpif(production, dest(dirs.destProduction + '/js/')))

};

export const fontsInjection = () => {

  return src(dirs.destProduction + '/*.html')
    .pipe(inject(src(dirs.destProduction + '/css/fonts.css', {read: false}), {relative: true}))
    .pipe(dest(dirs.destProduction))

};

export const buildFonts = series(fontsCss, fontsJs);
