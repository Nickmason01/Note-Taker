// const express = require('express');
// //const fs =require('fs');
// const uuid =require('./helpers/uuid');
// const PORT = 3001;
// const app =express();
// const api =require('./public/assets/js/index')

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

// app.use(express.static('public'));




// app.get('/notes', (req, res) =>
// res.sendFile(path.join(__dirname, "/public/notes.html")));

// app.get('*', (req, res) =>
// res.sendFile(path.join(__dirname, "/public/index.html")));

// app.get('/api/notes', (req, res) => {
//     console.log(`${req.method} request received for notes`);
//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// app.post('/api/notes',(req, res) => {
//     console.log(`${req.method} request received to add new note`);

//     const {title, text} = req.body;

//     if (req.body) {
//         const newNote ={
//             title,
//             text,
//             note_id: uuid(),
//         };

//         readandAppend(newNote, './db/db.json');
//         res.json('Note added!')
//     }else {
//         res.errored('something went wrong!');
//     }
// })

// app.listen(PORT, () =>
//   console.log(`App listening at http://localhost:${PORT}`)
// );

// sbcs assistant provided code here 

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));