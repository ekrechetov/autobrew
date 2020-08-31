// GPIO init
const fs = require("fs");
const PATH = '/sys/class/gpio/';

exports.setDirection = (pin, direction) => {
  try {fs.writeFile(PATH + 'gpio' + pin + '/direction', direction,  (err) =>  {
	if (err) {
	  console.log(`Error set pin${pin} direction: `, err)
	} else {
	    console.log(`Pin${pin} sets to ${direction}`);
	  }
      });
  } catch(err) {
      console.log(`Error from catch: `, err)
  }
}

exports.checkExport = (pin) => {
  let isExported;
  try { 
    const stats = fs.statSync(`${PATH}gpio${pin}`);
    console.log('file or directory does exist');
    isExported = true;
  } catch (err) {
      if (err.code === 'ENOENT') {
         console.log('file or directory does not exist');
         isExported = false;
      } else console.log('checkExport problems', err);
    }
    return isExported;
}

exports.exportPin = function(pin) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(PATH + 'export', pin,  (err) => {
      if (err) {
	console.log(`Error pin${pin} export: `, err);
	return reject(err);
      }
      console.log(`Gpio${pin} succes exported`);
      return resolve();//setDirection
    });
  });
}
