const { getAll, create, getOne, remove, update, verifyUser, login, logged, requestPassword, resetPassword } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJwt, getAll)
    .post(create);

routerUser.route("/login")
    .post(login)

routerUser.route("/reset_password")
    .post(requestPassword)

routerUser.route("/me")
    .get( verifyJwt, logged)


routerUser.route("/verify/:code")
    .get(verifyUser)

routerUser.route("/reset_password/:code")
    .post(resetPassword)

routerUser.route('/:id')
    .get(verifyJwt, getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update);

module.exports = routerUser;