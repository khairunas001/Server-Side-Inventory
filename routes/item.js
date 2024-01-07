const ItemRoute= require('express').Router();
const ItemController = require('../controller/itemController');

ItemRoute.get('/', ItemController.getItem);
ItemRoute.post('/', ItemController.add);
ItemRoute.delete('/:id', ItemController.delete);
ItemRoute.put('/:id', ItemController.update);


module.exports=ItemRoute