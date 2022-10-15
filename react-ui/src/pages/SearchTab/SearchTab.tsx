import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import NewSearch from '../../components/organisms/NewSearch/NewSearch';

const SearchTab: React.FC = () => {
  return (
    <IonPage className='search-tab'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recherche</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <NewSearch></NewSearch>
      </IonContent>
    </IonPage>
  );
};

export default SearchTab;
