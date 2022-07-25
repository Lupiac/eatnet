import { Http, HttpResponse } from '@capacitor-community/http';
import { isPlatform } from "@ionic/react";
import Plant from "../models/plant";

export function PlantService() {

    const getAllPlantsToxicity = async() => {
        const url = process.env.REACT_APP_API_URL +'/plants'
        console.log("url: ", url)
        if (isPlatform('hybrid')) {
            console.log('hybridddd')
            const options = {
              url: url,
            };

            return Http.request({ ...options, method: 'GET' }).then((res: any) => {
                console.log("res: ",res)
                return res
                //return res.map((x:any) => {return new Plant(x)})
            })
            // console.log("response: ",response)
            // return response;
        }    
        return fetch(url, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            })
            .then(response => response.json())
            .then((res: any) => {
                console.log(res)
                return res.map((x:any) => {return new Plant(x)})
            })
            .catch(console.log)
    }
    return {
        getAllPlantsToxicity
    }
}
