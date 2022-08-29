import { Http, HttpResponse } from '@capacitor-community/http';
import { isPlatform } from "@ionic/react";

const AccountService = {

    signin: async(formInputs: any) => {
        const url = process.env.REACT_APP_API_URL +'/signin'
        console.log("url: ", url)
        if (isPlatform('hybrid')) {
            console.log('hybridddd')
            const options = {
              url: url,
            };
        }    
        else{
            console.log("In service")
            return fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formInputs.mail,
                    password: formInputs.password,
                }),
            }).then(response => {
                if(response.status === 400){
                    return null;
                }else{
                    return response.json();
                }
            })
        }
    }
}
export default AccountService;