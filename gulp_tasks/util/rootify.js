export const rootify = (targets, root, extension) => {

  if (extension == null) {
    extension = null;
  }

  return targets.map(function(target) {
    return root + '/' + target + (extension ? "." + extension : '');
  });

};