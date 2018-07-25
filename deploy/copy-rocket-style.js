const cpFile = require('cp-file');

(async () => {
  await cpFile('src/layouts/styles.css', 'public/styles.css');
  console.log('Styles for rocket were copied');
})();
