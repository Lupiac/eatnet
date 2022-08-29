import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/organisms/ExploreContainer';
import SigninCard from '../../components/organisms/SigninCard/SigninCard';

const SettingsTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <SigninCard></SigninCard>
      </IonContent>
    </IonPage>
  );
};

export default SettingsTab;
