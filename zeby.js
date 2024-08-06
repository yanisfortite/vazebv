require('dotenv').config(); // Charger les variables d'environnement depuis le fichier .env

const fs = require('fs');
const path = require('path');

// Chemin vers le fichier config.yml
const configPath = path.join(__dirname, 'config.yml');

// Lire le contenu du fichier YAML
let fileContent = fs.readFileSync(configPath, 'utf8');

// Lire la variable d'environnement TOKEN
const token = process.env.TOKEN;

if (!token) {
  console.error('La variable d\'environnement TOKEN n\'est pas définie.');
  process.exit(1);
}

// Remplacer le placeholder TOKEN dans le contenu du fichier
fileContent = fileContent.replace(/Token: TOKEN/g, `Token: "${token}"`);

// Écrire le contenu modifié directement dans config.yml
fs.writeFileSync(configPath, fileContent, 'utf8');

console.log('config.yml a été mis à jour avec le token.');