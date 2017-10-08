import {src, dest, series, gulp, stream} from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import changed from 'gulp-changed';
import gulpif from 'gulp-if';

import { dirs, production } from './util/paths'
import { manifestBowerJs, manifestApplicationJs } from './util/js-paths'

export const collectJavaScript = (source, name) => {
  return src(source)

    .pipe(gulpif(!production, changed(dirs.dest + "/js/**/*.js")))
    .pipe(gulpif(production,uglify()))

    .pipe(concat(name))

    .pipe(gulpif(!production, dest(dirs.dest + '/js/')))
    .pipe(gulpif(production, dest(dirs.destProduction + '/js/')));
};

export const buildVendorJs = () => {
  return collectJavaScript(manifestBowerJs, 'vendor.js');
};

export const buildApplicationJs = () => {
  return collectJavaScript(manifestApplicationJs, 'application.js');
};

export const buildJS = series(buildVendorJs, buildApplicationJs);