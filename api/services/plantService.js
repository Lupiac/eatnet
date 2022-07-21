const plantnetService = require("./plantnetService");
const toxicityService = require("./toxicityService");
const userDAO = require("../dao/user");

class PlantService {
    getAllPlantsToxicity = () =>{
        return toxicityService.getAllPlantsToxicity();
    }
    analyseImage = async (userId, file) => {
        const apiKey = await userDAO.getUserApiKey(userId);
        const plantNetResponse = await plantnetService.searchPlantnet(file, apiKey);
        return toxicityService.getPlantsToxicity(plantNetResponse.results);
    }
}
module.exports = new PlantService();