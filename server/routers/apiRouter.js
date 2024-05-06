const express = require('express');
const apiRouter = express.Router();
const apiController = require('./../controllers/apiController.js');

apiRouter
  .get('/:user_id/getall', 
    (req, res, next) => {
      const { user_id } = req.params;
      return next();
    },
    apiController.getAll,
    (req, res) => {
      console.log(`Hello from the GET /api/${req.params.user_id}/getall !`);
      return res.status(200).json({ message: `Hello from the GET /api/${req.params.user_id}/getall !` });
    }
  )
  .get('/:user_id/:timer_id', 
    (req, res, next) => {
      const { user_id, timer_id } = req.params;

      return next();
    },
    apiController.getOne,
    (req, res) => {
      console.log(`Hello from the GET /api/${req.params.user_id}/${req.params.timer_id} route!`);
      return res.status(200).json({ message: `Hello from the GET /api/${req.params.user_id}/${req.params.timer_id} route!` });
    }
  )
  .post('/:user_id/add', 
    (req, res, next) => {
      const { user_id } = req.params;
      const { timer_id, timer_label, timer_description, timer_timestamp_start, timer_timestamp_end } = req.body;

      return next();
    },
    apiController.add,
    (req, res) => {
      console.log(`Hello from the POST /api/:user_id/post route!`);
      return res.status(200).json({ message: `Hello from the POST /api/${req.params.user_id}/post route!` });
    }
  )
  .delete('/:user_id/:timer_id', 
    (req, res, next) => {
      const { user_id, timer_id } = req.params;

      return next();
    },
    apiController.delete,
    (req, res) => {
      console.log(`Hello from the DELETE /api/${req.params.user_id}/${req.params.timer_id} route!`);
      return res.status(200).json({ message: `Hello from the DELETE /api/${req.params.user_id}/${req.params.timer_id} route!` });
    }
  )
  .patch('/:user_id/:timer_id', 
    (req, res, next) => {
      const { user_id, timer_id } = req.params;

      return next();
    },
    apiController.patch,
    (req, res) => {
      console.log(`Hello from the PATCH /api/${req.params.user_id}/${req.params.timer_id} route!`);
      return res.status(200).json({ message: `Hello from the PATCH /api/${req.params.user_id}/${req.params.timer_id} route!` });
    }
  );

module.exports = apiRouter;