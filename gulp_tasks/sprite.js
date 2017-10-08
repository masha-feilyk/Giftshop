import {src, dest, gulp} from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import bs from 'browser-sync';
import gulpif from 'gulp-if';

import { dirs, production } from './util/paths';

export const buildSprite = () => {
  return src(dirs.src + '/images/ico/*.svg')
    .pipe(svgSprite({
      shape: {
        spacing: {
          padding: 1,
          box: 'content'
        }
      },
      mode: {
        css: {
          dest: '../',
          sprite: 'images/sprite.svg',
          bust: false,
          render: {
            scss: {
              dest: '../src/sass/base/mixins/sprites.scss',
              template: 'src/sass/base/mixins/sprites-template.scss'
            }
          }
        }
      }
    }))
    .pipe(gulpif(!production,dest(dirs.dest + '/images/')))
    .pipe(gulpif(production,dest(dirs.destProduction + '/images/')))
    .pipe(bs.stream());
};