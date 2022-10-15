import { IonAccordion, IonAccordionGroup, IonIcon, IonImg, IonItem, IonLabel, IonText } from "@ionic/react";
import { arrowDownCircle } from "ionicons/icons";
import Plant from "../../../models/plant";
import PlantToxicities from "../../../models/plantToxicities";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative} from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import PlantnetAnalysisResult from "../../../models/plantnetAnalysisResult";

function PlantAnalysisResultCard(props: any){
  const {plant}: {plant:PlantnetAnalysisResult} = props;
  const getToxicityClass = (value: number) =>{
    return value === -1 ? "edible" : value === 0 ? "non-applicable" : value === 1 ? "toxic" : ""
  }
  return (<>
    <article className="plant-analysis-result-card">
      <header>
        <Swiper 
          slidesPerView={1.1}
          modules={[Pagination, EffectCreative]}
          pagination={true}
          centeredSlides={true}
          effect={'creative'} 
          creativeEffect={{
            "perspective": true,
            "prev": {
              "shadow": false,
              "translate": [
                "-50%",
                0,
                0
              ],
              "scale": 0.75
            },
            "next": {  
              "shadow": false,
              "translate": [
                "50%",
                0,
                0
              ],
              "scale": 0.75
            }
          }}
        >
          {plant.images.map((image: any)=>(
            <SwiperSlide key={image.url.m}>
                <IonImg src={image.url.m} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="scientific-name">{plant.scientificName}</div>
        <div className="score">Espèce reconnue à {(plant.score*100).toFixed(3)}%</div>
      </header>
      <div>Autres noms:</div>
      <ul className="common-names">
        {plant.species.commonNames.map((name:any, nameIndex:any)=>(
          <li key={nameIndex}>{name}</li>
        ))}
      </ul>
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
  </>
);
}

export default PlantAnalysisResultCard;
