const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Dossier des fichiers statiques (ton site web)
app.use(express.static(path.join(__dirname, 'public')));

// Démarrage du serveur
//app.listen(PORT, () => {
//  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
//g});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Serveur disponible sur : http://localhost:${PORT}`);
});
