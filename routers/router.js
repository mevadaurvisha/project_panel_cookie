const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const signUp = require('../controllers/signUpcontroller');
const logIn = require('../controllers/logincontroller');

router.get('/', controller.defaultcontroller);
router.get('/signup', signUp.signUpForm);
router.post('/signupForm', signUp.signUpController);
router.get('/login', logIn.loginForm);
router.post('/loginForm', logIn.logincontroller);

module.exports = router;