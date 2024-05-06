const express = require('express');
// const db = require('../db_models/itnryModel.js')
// const { createError } = require('./../serverConfigs/globalErrorHandler.js')


const authController = {
  // createErr: createError('authController')
}

authController.login = async (req, res, next) => {

  return next();
}

authController.signup = async (req, res, next) => {

  return next();
}

authController.oauth = async (req, res, next) => {

  return next();
}

authController.logout = async (req, res, next) => {

  return next();
}


module.exports = authController;