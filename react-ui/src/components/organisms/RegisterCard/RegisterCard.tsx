import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import AccountService from "../../../services/accountService";

interface RegisterForm{
  mail: string;
  password: string;
  confirmPassword: string;
  apiKey: string;
}

function RegisterCard(props: any) {
  // Variables
  const {setShowSignin}: {setShowSignin:any} = props;
  const [isFormValid, setIsFormValid] = useState(true)
  const [requestError, setRequestError] = useState(false)
  const [formInputs, setFormInputs] = useState({
    mail: '',
    password: '',
    confirmPassword: '',
    apiKey: ''
  } as RegisterForm);
  const [error, setError] = useState({
    mail: '',
    password: '',
    confirmPassword: '',
    apiKey: ''
  } as RegisterForm)
  const {setCurrentUser} = useContext(CurrentUserContext);
  const regex = {
    emailRegex: /\S+@\S+\.\S+/
  }

  // Functions
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
            case "confirmPassword":
              if (!value) {
                stateObj[name] = "Ce champ ne peut pas être vide";
              }
              else if(formInputs.password && value !== formInputs.password) {
                stateObj[name] = "Les deux mot de passes ne correspondent pas.";
              }
              break;
            case "apiKey":
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

  const handlePasswordVisibility = (e:any) => {
      if (e.target.checked) {
        e.target.previousSibling.type ='text';
      } else {
        e.target.previousSibling.type ='password';
      }
  }
  const onSubmitRegister = () => {
      return AccountService.register(formInputs).then(res =>{
        if(res){
          setShowSignin(true)
          setRequestError(false);
        }else{
          setRequestError(true);
        }
        return res;
      })
  }
  const onSigninLink = () => {
    setShowSignin(true)
  }
  //Checks form validity when error variable changes
  useEffect(()=>{
    let isError = false
    for(let key in error){
      const k = key as keyof RegisterForm;
      if(error[k]){
        isError = true;
      }
    }
    for(let key in formInputs){
      const k = key as keyof RegisterForm;
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
    return () => {
    }
  },[error])

  //Render
  return (
    <div className="register-form">
    <h1>Inscription</h1>
    <form name="formRegister" id="form-register" className={requestError?"invalid":""}>
      <fieldset>
        <div className={`form-field ${error.mail ? "is-error" : ""}`}>
          <label htmlFor="mail">Adresse Mail</label>
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
              type="password"
              name="password"
              id="password"
              placeholder="........"
              onChange={onInputChange}
              onBlur={validateInput}
            />
            <input
              type="checkbox"
              name="checkboxPasswordRegister"
              id="checkboxPasswordRegister"
              onClick={handlePasswordVisibility}
            />
            <label htmlFor="checkboxPasswordRegister"></label>
          </div>
          <div className="field-validation-error">{error.password}</div>
        </div>
        <div className={`form-field ${error.confirmPassword ? "is-error" : ""}`}>
          <label htmlFor="confirmPassword">Confirmer votre mot de passe</label>
          <div className="input-prefix ico-locked checkbox-suffix">
            <input
              value={formInputs.confirmPassword}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="........"
              onChange={onInputChange}
              onBlur={validateInput}
            />
            <input
              type="checkbox"
              name="checkboxConfirmPassword"
              id="checkboxConfirmPassword"
              onClick={handlePasswordVisibility}
            />
            <label htmlFor="checkboxConfirmPassword"></label>
          </div>
          <div className="field-validation-error">
            {error.confirmPassword}
          </div>
        </div>
        <div className={`form-field ${error.apiKey ? "is-error" : ""}`}>
          <label htmlFor="apiKey">API key Plantnet</label>
          <div className="input-prefix ico-key">
            <input
              value={formInputs.apiKey}
              type="text"
              name="apiKey"
              id="apiKey"
              placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXX"
              onChange={onInputChange}
              onBlur={validateInput}
            />
          </div>
          <div className="field-validation-error">{error.apiKey}</div>
        </div>
      </fieldset>
      <div className="actions">
        <button
          onClick={onSubmitRegister}
          type="button"
          className="btn default suffix arrow-right"
          disabled={!isFormValid}
        >
          S'inscrire
        </button>
        <button onClick={onSigninLink} className="btn button-link secondary">
          J'ai déjà un compte
        </button>
      </div>
    </form>
  </div>
  );
}

export default RegisterCard;