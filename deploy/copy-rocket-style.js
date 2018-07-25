const cpFile = require('cp-file');

(async () => {
  await cpFile('src/rocket-chat/styles.css', 'public/rocket-chat/styles.css');
  await cpFile('src/rocket-chat/main.js', 'public/rocket-chat/main.js');
  console.log('Files for rocket were copied');
})();
