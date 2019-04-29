// Importar modulo File System (fs)
const fs = require('fs');

module.exports = (filePath, options) => {
  return new Promise((resolve, reject)=> {
    // Leer el archivo
    fs.readFile(filePath, function(err, data){
      if (err){
        return reject(err);
      }
      resolve(data.toString());
    });
  });
};




