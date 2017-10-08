//import plugins
import {gulp} from 'gulp';
import rimraf from 'rimraf';

//import variables
import { dirs } from './util/paths';

export const buildClean = (cb) => {
    return rimraf(dirs.dest && dirs.destProduction, cb);

};