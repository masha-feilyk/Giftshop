import { dirs } from './paths'
import { rootify } from './rootify'

export let manifestBowerJs = rootify([
  'jquery/dist/jquery',
], 'bower_components', 'js');

export let manifestApplicationJs = rootify([
  '**/*'
], `${dirs.src}/js/`, 'js');