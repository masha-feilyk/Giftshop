import {gulp,emit} from 'gulp';
import notify from 'gulp-notify';

export const NotifyError = () => {
  const args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
};