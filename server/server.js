const express = require('express');
const path = require('path');
const apiRouter = require('./routers/apiRouter.js');
const authRouter = require('./routers/authRouter.js');

const app = express();

const port = 3000;
const domain = `localhost`;


app
  .use(express.static(path.join(__dirname, '..', 'client')))
  .get('/', 
    (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
    } 
  )
  // .get('/css/:filename', 
  //   (req, res) => {
  //     const filePath = path.join(__dirname, '..', 'client', 'src', 'css', req.params.filename);
  //     console.log(filepath)
  //     res.sendFile(filePath);
  //   }
  // )
  // .get('/js/:filename', 
  //   (req, res) => {
  //     const filePath = path.join(__dirname, '..', 'client', 'src', 'js', req.params.filename);
  //     console.log(filepath)
  //     res.sendFile(filePath);
  //   }
  // )
  .use('/api', apiRouter)
  .use('/auth', authRouter)
  .listen(port, () => {
    console.log(`Server is running at http://${domain}:${port}`);
  }
);