const plantnetService = require("./plantnetService");
const toxicityService = require("./toxicityService");
const userDAO = require("../dao/user");

class PlantService {
    getAllPlantsToxicity = () =>{
        return toxicityService.getAllPlantsToxicity();
    }
    analyseImage = async (userId, file, referential, organs) => {
        const apiKey = await userDAO.getUserApiKey(userId);
        const plantNetResponse = await plantnetService.searchPlantnet(file, apiKey, referential, organs);
        return toxicityService.getPlantsToxicity(plantNetResponse.results);
    }
}
module.exports = new PlantService();