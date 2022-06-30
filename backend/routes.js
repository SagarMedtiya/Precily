const router = require('express').Router();
const controller = require('./controller/controller')


router.post('/add',controller.addNews);
router.post('/update',controller.updateNews)
router.get('/count', controller.count)

module.exports = router