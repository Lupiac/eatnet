import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { cog, nutrition, search, time } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import { PlantListContextProvider } from '../../../contexts/PlantListContext';
import { SearchContextProvider } from '../../../contexts/SearchContext';
import HistoryTab from '../../../pages/HistoryTab/HistoryTab';
import PlantListTab from '../../../pages/PlantListTab/PlantListTab';
import SearchTab from '../../../pages/SearchTab/SearchTab';
import SettingsTab from '../../../pages/SettingsTab/SettingsTab';

const TabBar: React.FC = () => {
  return (
    <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/plantListTab">
            <PlantListContextProvider>
              <PlantListTab/>
            </PlantListContextProvider>
          </Route>
          <Route exact path="/searchTab">
            <SearchContextProvider>
              <SearchTab/>
            </SearchContextProvider>
          </Route>
          <Route path="/historyTab">
            <HistoryTab/>
          </Route>
          <Route path="/settingsTab">
            <SettingsTab/>
          </Route>
          <Route exact path="/">
            <Redirect to="/plantListTab"/>
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="plantListTab" href="/plantListTab">
            <IonIcon icon={nutrition}/>
            <IonLabel>Aliments</IonLabel>
          </IonTabButton>
          <IonTabButton tab="searchTab" href="/searchTab">
            <div className='search-tab'>
                <IonIcon icon={search}/>
                <IonLabel>Recherche</IonLabel>
            </div>
          </IonTabButton>
          <IonTabButton tab="historyTab" href="/historyTab">
            <div className='search-tab'>
                <IonIcon icon={time}/>
                <IonLabel>Historique</IonLabel>
            </div>
          </IonTabButton>
          <IonTabButton tab="settingsTab" href="/settingsTab">
            <IonIcon icon={cog}/>
            <IonLabel>Réglages</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
  );
};

export default TabBar;
