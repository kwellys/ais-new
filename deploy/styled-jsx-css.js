const fs = require("fs");
const path = require("path");
const { default: minifyCssString } = require("minify-css-string");
const glob = require("glob");

const folder = "./public";
const fileName = "jsx-styles.css";

const getFullyUniqueStyle = (styles, resultStyleArray = []) => {
  let openBrace = 0;
  let closeBrace = 0;

  for (let i = 0; i < styles.length; i++) {
    const OPEN_SYMBOL = "{";
    const CLOSE_SYMBOL = "}";
    const currentSymbol = styles[i];

    if (currentSymbol === OPEN_SYMBOL) {
      openBrace += 1;
    } else if (currentSymbol === CLOSE_SYMBOL) {
      closeBrace += 1;
    }
    if (openBrace === closeBrace && (openBrace !== 0 && closeBrace !== 0)) {
      const style = styles.slice(0, i + 1);
      let newResultStylesArray;
      if (resultStyleArray.indexOf(style) === -1) {
        newResultStylesArray = [...resultStyleArray, style];
      } else {
        newResultStylesArray = [...resultStyleArray];
      }

      const nextStyles = styles.substring(i + 1, styles.length);
      return getFullyUniqueStyle(nextStyles, newResultStylesArray);
    }
  }
  return resultStyleArray;
};
const checkIfExist = (newArray, item) => {
  if (newArray.indexOf(item) === -1) {
    newArray.push(item);
  }
  return newArray;
};

let css = "";
glob(`${folder}/**/*.html`, (er, files) => {
  files.forEach(file => {
    const pathToFile = path.resolve(file);
    const data = fs.readFileSync(pathToFile, "utf8");
    const newValue = data.replace(
      /<style id=\"[^>]+\>[\D\d\:\;\"\.\{\}\s\-]+\<\/style>/gim,
      str => {
        const pureCss = str.replace(/<style id=\"[^>]+\>|<\/style>/gim, "");
        css += pureCss;
        return `<link rel="stylesheet" type="text/css" href="/${fileName}" />`;
      }
    );
    fs.writeFileSync(pathToFile, newValue, "utf-8");
  });

  glob(`${folder}/**/*.css`, (er, cssFiles) => {
    cssFiles.forEach(file => {
      if (file.indexOf("cms.css") !== -1) {
        return;
      }

      const pathToFile = path.resolve(file);
      const data = fs.readFileSync(pathToFile, "utf8");

      css += data;
      fs.unlinkSync(pathToFile);
    });
    let cssImported = "";
    const cssWithOutImport = css.replace(/@import url\([^>]+?\);/gim, str => {
      cssImported += str;
      return "";
    });
    const clearCssImport = cssImported
      .match(/@import url\([^>]+?\);/gim)
      .reduce(checkIfExist, [])
      .join(" ");
    const minifiedCss = minifyCssString(cssWithOutImport);

    const clearCssWithoutImport = getFullyUniqueStyle(minifiedCss).join(" ");

    fs.writeFileSync(
      `${path.resolve(folder)}/${fileName}`,
      clearCssImport + clearCssWithoutImport
    );

    console.log("Styles were extracted! And minified");
  });
});
