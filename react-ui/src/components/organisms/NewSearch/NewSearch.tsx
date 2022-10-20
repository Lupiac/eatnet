import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, useIonModal} from "@ionic/react";
import { camera } from "ionicons/icons";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import { usePhotoGallery } from "../../../hooks/usePhotoGallery";
import PlantnetAnalysisResult from "../../../models/plantnetAnalysisResult";
import Referential from "../../../models/referential";
import { UserPhoto } from "../../../models/userPhoto";
import { PlantnetService } from "../../../services/plantnetService";
import { PlantService } from "../../../services/plantService";
import Dropdown from "../../molecules/dropdown/Dropdown";
import OrganModal from "../OrganModal/OrganModal";

function NewSearch(props: any) {
  const plantService = PlantService();
  const {setPlantResults} = useContext(SearchContext);

  const [photo, setPhoto] = useState<null|UserPhoto>(null)
  const [referentials, setReferential] = useState<Referential[]>([])
  const [preferedReferential, setPreferedReferential] = useState('the-plant-list')
  const plantnetService = PlantnetService();
  const {takePhoto } = usePhotoGallery();

  const manuallyTakePhoto = async() => {
    takePhoto().then((photo:UserPhoto)=>{
      setPhoto(photo)
      present();
    }).catch((error:any)=>{
      console.log(error.message)
    });
  }

  const [present, dismiss] = useIonModal(OrganModal, {
    onDismiss: async (data: string, role: string) => { 
      if (role === 'confirm') {
        if(photo){
          plantService.requestAnalysis(photo, preferedReferential, data).then((data: PlantnetAnalysisResult[]) => {
            setPlantResults(data);
          })
        }
        return Promise.resolve(dismiss(data, role));
      }
      else{
        return Promise.resolve(dismiss(false, role));
      }
    },
    photo: photo
  });

  useEffect(()=>{
    plantnetService.getAllReferentials().then((referentials: Referential[])=>setReferential(referentials));
  },[])
  return (<>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Recherche</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div className="new-search-wrapper">
        <h2>Nouvelle recherche</h2>
        <Dropdown id="referentialDropdown"
                    label="Type de flore: "
                    placeHolder="--- Selectionnez une option ---"
                    errorMessage="Veuillez vérifier ce champ"
                    onValueChange={(value:string) => setPreferedReferential(value)}
                    value={preferedReferential}
                    options={referentials.map((referential:Referential)=>{ return {text: referential.title, value: referential.id, description: referential.description}})}/>
        <button className="fab-button take-photo" onClick={() => manuallyTakePhoto()}>
            <IonIcon icon={camera}></IonIcon>
        </button>
      </div>
    </IonContent>
  </>
  );
}

export default NewSearch;