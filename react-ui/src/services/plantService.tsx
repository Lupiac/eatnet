import { Http, HttpResponse } from '@capacitor-community/http';
import { isPlatform } from "@ionic/react";
import Plant from "../models/plant";
import Utils from "../hooks/_utils";
import { UserPhoto } from "../models/userPhoto";
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PlantnetAnalysisResult from '../models/plantnetAnalysisResult';
export function PlantService() {
    const {currentUser} = useContext(CurrentUserContext);

    const getAllPlantsToxicity = async() => {
        const url = process.env.REACT_APP_API_URL +'/plants'
        if (isPlatform('hybrid')) {
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
        else{
            console.log("In service")
            return fetch(url, {
                method: 'get',
                headers: {'Content-Type': 'application/json'}
                })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    return res.map((x:any) => {return new Plant(x)})
                })
                .catch(console.log)
        }
    }
    const requestAnalysis = async (image: UserPhoto, preferedReferential: string, organ: string): Promise <any[]>=> {
      const file = await Utils.dataURLtoFile(image.data);
      const form = new FormData();
      form.append('userId', currentUser.user.user_id);
      form.append('organs', organ);
      form.append('referential', preferedReferential);
      form.append('images', file, 'tmp');

      // 3. Add GET URL parameters
      if (isPlatform('hybrid')) {
        const url = process.env.REACT_APP_API_URL +'/plants'
        const options = {
          url: url,
          data: form
        };

        const response: HttpResponse = await Http.request({
          ...options,
          method: 'POST'
        });
        return [response];
      } else {
        return fetch(process.env.REACT_APP_API_URL +'/plants', {
            method: 'POST',
            body: form as any,
          })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              return [`status: ${response.status} (${response.statusText})`]
            }
          })
          .then(data => {
            return data['results'].map((result:any)=>new PlantnetAnalysisResult(result));
          })
          .catch((error) => {
            console.error(error);
            return [error]
          });
      }
    }
    return {
        getAllPlantsToxicity,
        requestAnalysis
    }
}
