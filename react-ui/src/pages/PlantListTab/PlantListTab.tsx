import { IonContent, IonPage } from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import Plant from '../../models/plant';
import { PlantService } from '../../services/plantService';
import GroupedMenu from '../../components/organisms/GroupedMenu/GroupedMenu';
import { PlantListContext } from '../../contexts/PlantListContext';
import PlantListHeader from '../../components/organisms/PlantListHeader/PlantListHeader';


const PlantListTab: React.FC = () => {
  const plantService = PlantService();
  const {setFilteredPlantList, setOriginalPlantList} = useContext(PlantListContext);

  // Gets all plant toxicities at page load
  useEffect(()=>{
    plantService.getAllPlantsToxicity().then((resPlantList: Plant[]) => {
      setOriginalPlantList(resPlantList|| [])
      setFilteredPlantList(resPlantList)
    })
  }, [])

  return (
    <IonPage>
      <IonContent fullscreen>
        <PlantListHeader></PlantListHeader>
        <GroupedMenu></GroupedMenu>
      </IonContent>
    </IonPage>
  );
};

export default PlantListTab;
