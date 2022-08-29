import { IonContent, IonHeader, IonIcon, IonPage, IonSearchbar, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { hourglassOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import PlantResultCard from '../../components/organisms/PlantResultCard/PlantResultCard';
import Plant from '../../models/plant';
import { PlantService } from '../../services/plantService';

const PlantListTab: React.FC = () => {
  const plantService = PlantService();
  const [plantList, setPlantList] = useState<Plant[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredPlantList, setFilteredPlantList] = useState<Plant[]>([]);
  const platform = isPlatform('hybrid')?"hybrid":"desktop"

  useEffect(()=>{
    plantService.getAllPlantsToxicity().then((resPlantList: Plant[]) => {
      console.log(resPlantList)
      setPlantList(resPlantList||[]);
    })
  }, [])
  useEffect(() => {
    setFilteredPlantList(plantList)
  }, [plantList])
  useEffect(() => {
    const filteredList = plantList.filter((x: Plant) => {
      return x.containsString(searchText)
    })
    setFilteredPlantList(filteredList)
  }, [searchText])
  const request = () => {
    plantService.getAllPlantsToxicity().then((resPlantList: any) => {
      console.log(resPlantList)
      setPlantList(resPlantList);
    })
  }
  const plantContainsString = () => {
    plantService.getAllPlantsToxicity().then((resPlantList: any) => {
      console.log(resPlantList)
      setPlantList(resPlantList);
    })
  }
  
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
        <ul className='plantlist-wrapper'>
          {filteredPlantList.map((x:Plant, index:any) => (
            <li key={index}>
              <PlantResultCard plant={x}/>
            </li>
          ))}
        </ul>
        <button className="fab-button connect" onClick={() => request()}>
              <IonIcon icon={hourglassOutline}></IonIcon>
          </button>
      </IonContent>
    </IonPage>
  );
};

export default PlantListTab;
