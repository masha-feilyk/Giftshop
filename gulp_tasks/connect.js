//import plugins
import { gulp } from 'gulp';
import bs from 'browser-sync';
import connect from 'gulp-connect';

export const connectServer = () => {

  return connect.server({
    name: 'CodeGulpSkeleton',
    root: ['www'],
    port: 4000
  });

};

export const browserSync = () => {

  return bs.init({
    proxy: "http://localhost:4000",
    files: ["www/**/*.*"],
    port: 3000,
  });

};