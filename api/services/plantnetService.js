const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

class PlantnetService {
    searchPlantnet = async (image, apikey, preferedReferential, organs) => {
        const form = new FormData();
        form.append('organs', organs);
        form.append('images', fs.createReadStream(image.path));
        
        const url = `${process.env.PLANTNET_API_URL}/${preferedReferential}?api-key=${apikey.plantnet_apikey}&lang=fr&include-related-images=true`
        console.log(url);
        return axios
            .post(url,
                form, {
                    headers: form.getHeaders()
                }
            )
            .then((response) => {
                fs.unlink(image.path, function (err) {
                    if (err) throw err;
                    // if no error, file has been deleted successfully
                    console.log('File deleted!');
                });
                return response.data
            })
            .catch(error => Promise.reject("Unable to recognize plant"));
    }
}
module.exports = new PlantnetService()