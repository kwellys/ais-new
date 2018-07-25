const fs = require('fs');
const path = require('path');
const glob = require('glob');

const folder = './public';
const fileName = 'jsx-styles.css';

let css = '';
glob(`${folder}/**/*.html`, (er, files) => {
  files.forEach((file) => {
    const pathToFile = path.resolve(file);
    const data = fs.readFileSync(pathToFile, 'utf8');
    const newValue = data.replace(/<style id=\"[^>]+\>[\D\d\:\;\"\.\{\}\s\-]+\<\/style>/gim, (str) => {
      const pureCss = str.replace(/<style id=\"[^>]+\>|<\/style>/gim, '');
      css += pureCss;
      return `<link rel="stylesheet" type="text/css" href="${fileName}" />`;
    });
    fs.writeFileSync(pathToFile, newValue, 'utf-8');
  });

  glob(`${folder}/**/*.css`, (er, cssFiles) => {
    cssFiles.forEach((file) => {
      if (file.indexOf('cms.css') !== 0) {
        return;
      }

      const pathToFile = path.resolve(file);
      const data = fs.readFileSync(pathToFile, 'utf8');

      css += data;
      fs.unlinkSync(pathToFile);
    });
    let cssImported = '';
    const cssWithOutImport = css.replace(/@import url\([^>]+?\);/gim, (str) => {
      cssImported += str;
      return '';
    });
    fs.writeFileSync(`${path.resolve(folder)}/${fileName}`, cssImported + cssWithOutImport);

    console.log('Styles were extracted!');
  });
});
