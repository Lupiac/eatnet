import { IonAccordion, IonAccordionGroup, IonIcon, IonImg, IonItem, IonLabel, IonText } from "@ionic/react";
import { arrowDownCircle } from "ionicons/icons";
import Plant from "../../../models/plant";

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
          <li className={`ico-rabbit ${getToxicityClass(plant.toxicRabbit)}`}>
            {/* <IonIcon src="assets/images/icon/rabbit.svg"/> */}
          </li>
          <li className={`ico-horse ${getToxicityClass(plant.toxicEquine)}`}></li>
          <li className={`ico-bovin ${getToxicityClass(plant.toxicBovin)}`}></li>
          <li className={`ico-goat ${getToxicityClass(plant.toxicGoat)}`}></li>
          <li className={`ico-sheep ${getToxicityClass(plant.toxicSheep)}`}></li>
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
