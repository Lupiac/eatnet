import { IonContent, IonHeader, IonIcon, IonPage, IonSearchbar, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { hourglassOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import PlantResultCard from '../../components/organisms/PlantResultCard/PlantResultCard';
import Plant from '../../models/plant';
import { PlantService } from '../../services/plantService';
import { Virtuoso } from 'react-virtuoso'

const PlantListTab: React.FC = () => {
  const plantService = PlantService();
  const [plantList, setPlantList] = useState<Plant[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredPlantList, setFilteredPlantList] = useState<Plant[]>([]);
  const platform = isPlatform('hybrid')?"hybrid":"desktop"

  // Get all plant toxicities at page load
  useEffect(()=>{
    plantService.getAllPlantsToxicity().then((resPlantList: Plant[]) => {
      console.log(resPlantList)
      setPlantList(resPlantList||[]);
      setFilteredPlantList(resPlantList)
    })
  }, [])
  
  // Filters plantList 
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
        <Virtuoso
          className='plantlist-wrapper'
          totalCount={filteredPlantList.length}
          itemContent={(index) => filteredPlantList.length>0?<PlantResultCard plant={filteredPlantList[index]}/>:"rien"}
        />
      </IonContent>
    </IonPage>
  );
};

export default PlantListTab;
