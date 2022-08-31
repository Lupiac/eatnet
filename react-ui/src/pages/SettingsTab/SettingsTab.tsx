import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useState } from 'react';
import RegisterCard from '../../components/organisms/RegisterCard/RegisterCard';
import SigninCard from '../../components/organisms/SigninCard/SigninCard';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const SettingsTab: React.FC = () => {
  const [showSignin, setShowSignin] = useState(true);
  const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
  const logOut = () =>{
    setCurrentUser(null)
  }
  const displayContent = () =>{
    if(currentUser){
      return <>
        <p>Vous êtes connecté(e)</p>
        <button onClick={logOut}>Se déconnecter</button>
      </>
    }else{
      return <>
        {showSignin?<SigninCard setShowSignin={setShowSignin}></SigninCard>:<RegisterCard setShowSignin={setShowSignin}></RegisterCard>}
      </>
    }
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        {displayContent()}
      </IonContent>
    </IonPage>
  );
};

export default SettingsTab;
