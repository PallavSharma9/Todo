const jwt = require('jsonwebtoken')
const {Response} = require('express')
const SECRET = 'SEcr#1'

const authenticateJwt = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(authHeader) {
        const token = authHeader.split(' ')[1]
        jwt.verify(token, SECRET, (err,user) => {
            if(err){
                return res.SendStatus(403)
            }
            req.userId = user.id 
            next();
        })
    } else {
        res.SendStatus(401)
    }
}

module.exports = {
    authenticateJwt,
    SECRET
}