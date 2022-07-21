const express = require('express');
const plantController = require('../controllers/plant');
const multerUpload = require('../middlewares/multerUpload');
const auth = require('../middlewares/authorization');

const plantsRouter = express.Router()

// PLANTS ROUTES
plantsRouter.get('/plants', auth.requireAuth, (req, res) => { plantController.getAllPlantsToxicity(req, res) })
plantsRouter.post('/plants', auth.requireAuth, multerUpload.uploadImage.single('images'), (req, res) => { plantController.handleImageAnalysis(req, res) })

module.exports = plantsRouter;