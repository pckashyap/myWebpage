const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'docs')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});
// Add this AFTER your API routes, BEFORE app.listen
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'about.html'));
});



app.listen(PORT, () => {
  console.log(`akspage.com is running at http://localhost:${PORT}`);
});
