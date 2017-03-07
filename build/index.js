import { ncp } from 'ncp';

copyImagesAndFonts();
function copyImagesAndFonts() {
  copy('node_modules/uswds/src/img', 'dist/stylesheets/img');
  copy('node_modules/uswds/src/fonts', 'dist/stylesheets/fonts');
}

function copy(source, destination) { 
  ncp(source, destination, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`copied from ${source} to ${destination}`);
  });
}