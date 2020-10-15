const { Router } = require('express');
const ColmeiaController = require('../controllers/ColmeiaController');

const router = Router();

router.get('/colmeias', ColmeiaController.getColmeias);
router.get('/colmeias/:id', ColmeiaController.getColmeiaById);
router.post('/colmeias', ColmeiaController.createColmeia);
router.put('/colmeias/:id', ColmeiaController.updateColmeia);
router.delete('/colmeias/:id', ColmeiaController.deleteColmeia);

module.exports = router;