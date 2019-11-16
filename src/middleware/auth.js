const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
   try {
    const [authScheme, token] = req.header('Authorization').split(' ')
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    //console.log('decoded', decoded)
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

    if(!user) {
        throw new Error()
    }

    req.token = token
    req.user = user
    next()
   } catch (error) {
       res.status(401).send({ error: 'Please Authenticate or Authentication failed with following error: ' + error })
   }
}

module.exports = auth