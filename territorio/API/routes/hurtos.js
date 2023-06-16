const {Router} = require('express')

const route = Router()

const {hurtoGet,
    hurtoPost,
    hurtoPut,
    hurtoDelete} = require('../controllers/hurto')

route.get('/',hurtoGet)

route.post('/',hurtoPut)

route.put('/',hurtoPost)

route.delete('/',hurtoDelete)

module.exports = route