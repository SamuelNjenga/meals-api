const userService = require('../services/UserService');
const loginService = require('../services/LoginService');
const jwt = require('jsonwebtoken');
const ReqValidator = require('../utils/validator')
const bcrypt = require('bcrypt')
const {
    roles
} = require('../utils/roles');

async function validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

exports.login = async (req, res, next) => {
    try {
        const {
            email,
            password
        } = req.body;
        const user = await loginService.getUser({
            where: {
                email: email
            }
        });
        if (!user) return next(new Error('Email does not exist'));
        const validPassword = await validatePassword(password, user.password);
        if (!validPassword) return next(new Error('Password is not correct'))
        const accessToken = jwt.sign({
            userId: user.id
        }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        await loginService.updateUser(accessToken, {
            where: {
                id: user.id
            }
        })
        res.status(200).json({
            data: {
                email: user.email,
                role: user.role,
                id: user.id
            },
            accessToken
        })
    } catch (error) {
        next(error);
    }
}

exports.grantAccess = function (action, resource) {
    return async (req, res, next) => {
        try {
            const permission = roles.can(req.user.role)[action](resource);
            if (!permission.granted) {
                return res.status(401).json({
                    error: "You don't have enough permission to perform this action"
                });
            }
            next()
        } catch (error) {
            next(error)
        }
    }
}

exports.allowIfLoggedin = async (req, res, next) => {
    try {
        const user = res.locals.loggedInUser;
        if (!user)
            return res.status(401).json({
                error: "You need to be logged in to access this route"
            });
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}


