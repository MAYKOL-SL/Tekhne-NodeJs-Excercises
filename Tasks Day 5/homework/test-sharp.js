const sharp = require("sharp");

sharp('img.jpg')
  .rotate(180)
  .resize(600)
  .toFile('img_small-2.jpg')
  .then( data => { console.info(data) })
  .catch( err => console.error(err.stack));