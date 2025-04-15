console.log('Creazione directory per immagini completata');

// Crea cartella data/images
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'data/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log(`Cartella creata: ${imagesDir}`);
} else {
  console.log(`Cartella già esistente: ${imagesDir}`);
}

// Crea un file di test
fs.writeFileSync(path.join(imagesDir, 'test.txt'), 'Questo è un file di test');
console.log('File di test creato');
