const plantService = require("../services/plantService");
const fs = require('fs');

class PlantController{
    getAllPlantsToxicity = (req, res) => {
        return plantService.getAllPlantsToxicity().then(results =>{
            return res.status(200).json(results)
        })
        .catch(err => res.status(400).json(err));
    }

    handleImageAnalysis = (req, res) => {
        const {userId, preferedReferential, organs} = req.body;
        const file = req.file;
        if (!userId || !file) {
            return res.status(400).json('incorrect form submission');
        }
        return plantService.analyseImage(userId, file, preferedReferential, organs).then(results =>{
            return res.status(200).json({results: results})
        })
        .catch(err => {
            fs.unlink(file.path, function (err) {
                if (err) throw err;
                // if no error, file has been deleted successfully
                console.log('File deleted!');
            });
            return res.status(400).json(err)
        });
    }
}

module.exports = new PlantController();