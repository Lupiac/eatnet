import { IonContent, IonHeader, IonPage, IonSearchbar, IonToolbar } from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import Plant from '../../models/plant';
import { PlantService } from '../../services/plantService';
import GroupedMenu from '../../components/organisms/GroupedMenu/GroupedMenu';
import { PlantListContext } from '../../contexts/PlantListContext';


const PlantListTab: React.FC = () => {
  const plantService = PlantService();
  const [plantList, setPlantList] = useState<Plant[]>([]);
  const [searchText, setSearchText] = useState("");
  const {filteredPlantList, setFilteredPlantList} = useContext(PlantListContext);

  // Gets all plant toxicities at page load
  useEffect(()=>{
    plantService.getAllPlantsToxicity().then((resPlantList: Plant[]) => {
      setPlantList(resPlantList||[]);
      setFilteredPlantList(resPlantList)
    })
  }, [])
  
  // Filters plantList by searching searchText in plant's fields
  useEffect(() => {
    const filteredList = plantList.filter((x: Plant) => {
      return x.containsString(searchText)
    })
    setFilteredPlantList(filteredList)
  }, [searchText])

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <h1>Liste d'aliments</h1>
              <IonSearchbar value={searchText} onIonChange={e=> setSearchText(e.detail.value!)}/>
            <div className='search-wrapper'>
              <div>{filteredPlantList.length} espèce{filteredPlantList.length>1?"s":""}</div>
              <div>Trier par: Nom</div>
            </div>
          </IonToolbar>
        </IonHeader>
        <GroupedMenu></GroupedMenu>
      </IonContent>
    </IonPage>
  );
};

export default PlantListTab;
