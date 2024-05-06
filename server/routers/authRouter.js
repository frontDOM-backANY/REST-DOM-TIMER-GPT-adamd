const express = require('express');
const authRouter = express.Router();
const authController = require('./../controllers/authController.js');

authRouter
  .post('/login', 
    (req, res, next) => {
      const { username, password } = req.body;
      console.log(`Hello from the GET /auth/login!`);

      return next();
    },
    authController.login,
    (req, res) => { console.log(`Bye from the GET /auth/login!`);
      return res.status(200).json({ message: `Bye from the GET /auth/login!` });
    }
  )
  .post('/logout', 
    (req, res, next) => {
      console.log('Hello from the GET /api/${req.params.user_id}/${req.params.timer_id} route!' );
      
      return next();
    },
    authController.logout,
    (req, res) => { console.log(`Bye from the GET /auth/logout route!`);
      return res.status(200).json({ message: `Bye from the GET /auth/logout route!` });
    }
  )
  .post('/signup', 
    (req, res, next) => {
      const { username, password } = req.body;
      console.log(`Hello from the POST /auth/signup route!`);

      return next();
    },
    authController.signup,
    (req, res) => { console.log(`Bye from the POST /auth/signup route!`);
      return res.status(200).json({ message: `Bye from the POST /auth/signup route!` });
    }
  )
  .post('/oauth', 
    (req, res, next) => {
      const { code } = req.body;
      console.log(`Hello from the DELETE /auth/oauth route!`);

      return next();
    },
    authController.oauth,
    (req, res) => { console.log(`Bye from the DELETE /auth/oauth route!`);
      return res.status(200).json({ message: `Bye from the DELETE /auth/oauth route!` });
    }
  );


module.exports = authRouter;