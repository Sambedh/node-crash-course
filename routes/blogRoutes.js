const express = require('express');
const blogController = require('../controller/blog');
const route = express.Router();


route.get('/',blogController.indexblog )

route.post('/',blogController.insertblog)

route.get('/create',blogController.createblog)

route.get('/:id',blogController.singleblog)

route.delete('/:id',blogController.deleteblog)


module.exports = {route};