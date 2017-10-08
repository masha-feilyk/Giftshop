//import plugins
import {src, dest, gulp} from 'gulp';
import gulpif from 'gulp-if';

//import variables
import { dirs,production } from './util/paths';

export const buildImages = () => {

  return src(dirs.src + '/images/blocks/**/*.*')
    .pipe(gulpif(!production, dest(dirs.dest + '/images/blocks')))
    .pipe(gulpif(production, dest(dirs.destProduction + '/images/blocks')))

};