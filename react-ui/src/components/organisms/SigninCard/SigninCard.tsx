import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import AccountService from "../../../services/accountService";

interface FormInput{
  mail: string;
  password: string;
}

function SigninCard() {
    const [passwordType, setPasswordType] = useState('password');
    const [isFormValid, setIsFormValid] = useState(true)
    const [requestError, setRequestError] = useState(false)
    const [formInputs, setFormInputs] = useState({
      mail: '',
      password: ''
    } as FormInput);
    const [error, setError] = useState({
      mail: '',
      password: ''
    } as FormInput)

    const {setCurrentUser} = useContext(CurrentUserContext);

    const regex = {
      emailRegex: /\S+@\S+\.\S+/
    }
  
    const validateInput = (e:any) => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj:any = { ...prev, [name]: "" };
     
          switch (name) {
            case "mail":
              if (!value) {
                stateObj[name] = "Ce champ ne peut pas être vide";
              } else if(!regex.emailRegex.test(value)){
                stateObj[name] = "Email non valide"
              }
              break;
     
            case "password":
              if (!value) {
                stateObj[name] = "Ce champ ne peut pas être vide";
              } 
              break;
     
            default:
              break;
          }
     
          return stateObj;
        });
      }
    const onInputChange = (e: any) => {
        const {
            name,
            value
        } = e.target;
        setFormInputs(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const handlePasswordValidity = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }
    const onSignin = () => {
        return AccountService.signin(formInputs).then(res =>{
          if(res){
            setCurrentUser(res);
            setRequestError(true);
          }else{
            setRequestError(false);
          }
          
        })
    }
    const onCreateAccount = () => {
    }
    useEffect(()=>{
      let isError = false
      for(let key in error){
        const k = key as keyof FormInput;
        if(error[k]){
          isError = true;
        }
      }
      for(let key in formInputs){
        const k = key as keyof FormInput;
        if(formInputs[k]=== ''){
          isError = true;
        }
      }
      if(isError){
        setIsFormValid(false)
      }else{
        setRequestError(false)
        setIsFormValid(true);
      }
      
    },[error])
    return (
        <div className="signin-card">
          <h2>Connexion</h2>
          <form name="formSignin" id="form-signin" className={requestError?"invalid":""}>
            <fieldset>
              <div className={`form-field ${error.mail ? "is-error" : ""}`}>
                <label htmlFor="email-adress">Adresse Mail</label>
                <div className="input-prefix ico-mail">
                  <input
                    value={formInputs.mail}
                    type="mail"
                    name="mail"
                    id="email-adress"
                    placeholder="hello@mail.com"
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                </div>
                <div className="field-validation-error">{error.mail}</div>
              </div>
              <div className={`form-field ${error.password ? "is-error" : ""}`}>
                <label htmlFor="password">Mot de passe</label>
                <div className="input-prefix ico-locked checkbox-suffix">
                  <input
                    value={formInputs.password}
                    type={passwordType}
                    name="password"
                    id="password"
                    placeholder="........"
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  <input type="checkbox" name="checkboxPassword" id="checkboxPassword" onClick={handlePasswordValidity}/>
                  <label htmlFor="checkboxPassword"></label>
                </div>
                <div className="field-validation-error">{error.password}</div>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="stayConnected"
                  name="stayConnected"
                  value="stayConnected"
                />
                <label htmlFor="stayConnected">Rester connecté</label>
              </div>
            </fieldset>
            <div className="form-error-message">
              <p>Identifiants incorrects</p>
              <p>Veuillez re-vérifier les champs</p>
            </div>
            <div className="actions">
              <button
                onClick={onSignin}
                type="button"
                className="default suffix arrow-right"
                disabled={!isFormValid}
              >
                Se connecter
              </button>
              <button
                onClick={onCreateAccount}
                type="button"
                className="button-link secondary">
                Je n'ai pas encore de compte
              </button>
            </div>
          </form>
          <a href="#">Mot de passe oublié ?</a>
        </div>
    );
}

export default SigninCard;