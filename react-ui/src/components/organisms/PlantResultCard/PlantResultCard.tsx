import { IonAccordion, IonAccordionGroup, IonIcon, IonImg, IonItem, IonLabel, IonText } from "@ionic/react";
import { arrowDownCircle } from "ionicons/icons";
import Plant from "../../../models/plant";
import PlantToxicities from "../../../models/plantToxicities";

function PlantResultCard(props: any){
  const {plant}: {plant:Plant} = props;
  const getToxicityClass = (value: number) =>{
    return value === -1 ? "edible" : value === 0 ? "non-applicable" : value === 1 ? "toxic" : ""
  }
  return (
    <article className="plant-result-card">
        <header>
            <IonImg src={plant.url} />
            <div className="common-name">{plant.name}</div>
            <div className="scientific-name">{plant.scientificName}</div>
        </header>
        <ul className="edible-tags">
          {Object.keys(plant.toxicities).map( (toxicity: string) =>{
            return (
              <li key={toxicity} className={`ico-${toxicity} ${getToxicityClass(plant.toxicities[toxicity as keyof PlantToxicities])}`}>
                <IonIcon src={`assets/icon/${toxicity}.svg`}/>
              </li>
            )
          })}
        </ul>
        <IonAccordionGroup>
          <IonAccordion value="remarques" toggleIcon={arrowDownCircle}>
            <IonItem slot="header">
              <IonLabel>Remarques ({plant.remarks.length})</IonLabel>
            </IonItem>
            <ul slot="content" className="remarks-list">
              {plant.remarks.length>0?
                plant.remarks.map((x:string, index:any) => (
                  <li key={index}>{x}</li>
                ))
                :
                <li>Pas de remarque</li>
              }
            </ul>
          </IonAccordion>
        </IonAccordionGroup>
    </article>
);
}

export default PlantResultCard;
