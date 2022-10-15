import { IonIcon} from "@ionic/react";
import { camera } from "ionicons/icons";
import { useEffect, useState } from "react";
import Referential from "../../../models/referential";
import { PlantnetService } from "../../../services/plantnetService";
import Dropdown from "../../molecules/dropdown/Dropdown";

function NewSearch(props: any) {
  const [referentials, setReferential] = useState<Referential[]>([])
  const [preferedReferential, setPreferedReferential] = useState('the-plant-list')
  const plantnetService = PlantnetService();

  const manuallyTakePhoto = () => {

  }

  useEffect(()=>{
    plantnetService.getAllReferentials().then((referentials: Referential[])=>setReferential(referentials));
  },[])
  return (
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
  );
}

export default NewSearch;