// 'use strict';

// const express = require('express');
// const app = express();
// const notFoundHandler = require('./error-handlers/404');
// const errorHandler = require('./error-handlers/500');
// const logger = require('./middleware/logger');
// const validator = require('./middleware/validator');

// app.use(express.json());
// app.use(logger);
// app.use(validator);



// //localhost:3000/person?name=neveen
// // app.get('/person',(req,res)=>{
// //   const output={
// //     name: req.query.name,
// //   };
// //   res.json(output);
// // });

// app.get('/', (req, res) =>{
//   res.send('welcome to server.js');
// });

// app.get( '/bad',(req, res)  =>{
//   throw new Error('Something went wrong !');
// });

// app.get('/person', validator, (req, res) => {
//   res.status(200).json({
//     name: req.query.name,
//   });
// });


// //localhost:3000/person/neveen
// // app.get('person/:name',(req,res)=>{
// //   const output={
// //     name: req.params.name,
// //   };
// //   res.json(output);
// // });








// app.use('*', notFoundHandler);
// app.use(errorHandler);


// function start(port) {
//   app.listen(port, () => {
//     console.log(`The server is listen on port ${port}`);
//   });
// }

// module.exports = {
//   app: app,
//   start: start,
// };


'use strict';
const express = require('express');
const app = express();
const errorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
app.use(express.json());
app.use(logger);

app.get('/', home);
app.get('/bad', badReq);
function home(req,res){
  res.send('welcome to server.js');
}
function badReq(req, res) {
  throw new Error('Something went wrong !!!!!');
}

app.get('/person', validator, (req, res) => {
  res.status(200).json({
    name: req.query.name,
  });
});

function start(PORT){
  app.listen(PORT,()=>{
    console.log(`app is listening on PORT ${PORT}`);
  });
}

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: start,
};