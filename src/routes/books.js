const { Router }  = require("express");
const { list, get, add, edit, remove } =  require('../controllers/books');

const router = Router();

router.get('/', list);

router.get('/:id', get);

router.post('/', add);

router.patch('/:id', edit);

router.delete('/:id', remove)

module.exports = router