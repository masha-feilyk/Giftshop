import yargs from 'yargs';

export const argv = yargs.argv;
export const production = !!argv.production;


export const dirs = {
  src: 'src',
  dest: 'www',
  destProduction: 'www_production'
};


export const sources = {
  styles: `${dirs.src}/sass/**/*.sass`,
  sprite: `${dirs.src}/images/ico/*.svg`,
  templates: `${dirs.src}/templates/**/*.pug`,
  scripts: `${dirs.src}/**/*.js`
};