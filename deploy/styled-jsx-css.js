const fs = require('fs');
const path = require('path');
const glob = require('glob');

const folder = './public';
const fileName = 'jsx-styles.css';


glob(`${folder}/*.html`, (er, files) => {
  let css = '';
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

  fs.writeFileSync(`${path.resolve(folder)}/${fileName}`, css);
  console.log('Styles were extracted!');
});
