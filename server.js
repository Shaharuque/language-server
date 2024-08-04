// const express = require('express');
// const app = express();
// const path = require('path');
// const fs = require('fs');

// // Middleware to serve static files
// app.use('/locales', express.static(path.join(__dirname, 'locales')));

// // Serve the JSON translation files
// app.get('/locales/:lng/:ns.json', (req, res) => {
//   const { lng, ns } = req.params;
//   const filePath = path.join(__dirname, 'locales', lng, `${ns}.json`);

//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       return res.status(404).send('Translation file not found');
//     }
//     res.json(JSON.parse(data));
//   });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

// Serve translation files
app.use('/locales', express.static(path.join(__dirname, 'locales')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
