import { IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonContent, IonImg } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import Organ from "../../../models/organ";
import { UserPhoto } from "../../../models/userPhoto";
import { PlantnetService } from "../../../services/plantnetService";

function OrganModal({onDismiss, photo}: {onDismiss: (data?: string | null | undefined, role?: string) => void; photo: UserPhoto;}){
    const inputRef = useRef<HTMLIonInputElement>(null);
    const [organs, setOrgans] = useState<Organ[]>([]);
    const plantnetService = PlantnetService();

    useEffect(()=>{
        plantnetService.getAllOrgans().then((organs: Organ[])=>setOrgans(organs))
    }, [])
    const onRadioChange=(e:any)=>{
        onDismiss(e.target?.value, 'confirm')
    }
    return (
      <IonPage className="organ-modal-wrapper">
        <IonHeader>
          <IonToolbar>
            <div className="row">
                <button className="back-btn" onClick={() => onDismiss(null, 'cancel')}>
                    <IonIcon icon={arrowBack}></IonIcon>
                </button>
                <IonTitle>Choisir l'organe associé</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className="organ-wrapper">
                <IonImg className="preview" src={photo.webviewPath} />
                <form>
                    <ul className="radio-group">
                        {organs.map((organ:Organ)=>{
                            return <li key={organ.value} className={"ico-"+organ.value}>
                                        <input type="radio" id={organ.value} name="radio" value={organ.value} onChange={onRadioChange}/>
                                        <label htmlFor={organ.value}>{organ.text}</label>
                                    </li>
                        })}
                        </ul>
                </form>
            </div>
        </IonContent>
      </IonPage>
    );
  };
export default OrganModal;