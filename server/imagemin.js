const glob = require('glob');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs');

function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file) => {
      const curPath = `${path}/${file}`;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); // 递归删除文件夹
      } else {
        fs.unlinkSync(curPath); // 删除文件
      }
    });
    fs.rmdirSync(path);
  }
}

delDir('./static/');

glob.sync('./images/**/*.*').forEach(async (item) => {
  (async () => {
    const pathName = item.split('./images/')[1];
    const dirAndFile = pathName.split('/');
    const dirName = dirAndFile[0];
    const fileName = dirAndFile[1];
    const file = fileName ? `images/${dirName}/${fileName}` : `images/${dirName}`;
    await imagemin([file], {
      destination: fileName ? `static/${dirName}/` : 'static/',
      plugins: [
        imageminPngquant({
          quality: [0.5, 0.75],
        }),
        imageminJpegtran({
          progressive: true,
        }),
      ],
    });
  })();
});
