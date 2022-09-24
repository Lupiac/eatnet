import { IonHeader, IonModal } from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { PlantListContext } from "../../../contexts/PlantListContext";
import Plant from "../../../models/plant";
import PlantToxicities from "../../../models/plantToxicities";

interface AnimalsForm {
  rabbit: Animal,
  equine: Animal,
  bovin: Animal,
  goat: Animal,
  sheep: Animal
}
interface Animal{
  toxicities: Toxicities,
  text: string
}
interface Toxicities{
  edible: boolean,
  toxic: boolean,
  warning: boolean
}
const initialForm: AnimalsForm = {
  rabbit: {
    toxicities: {
      edible: false,
      toxic: false,
      warning: false
    },
    text: "Lapins"
  },
  equine: {
    toxicities: {
      edible: false,
      toxic: false,
      warning: false
    },
    text: "Équidés"
  },
  bovin: {
    toxicities: {
      edible: false,
      toxic: false,
      warning: false
    },
    text: "Bovins"
  },
  goat: {
    toxicities: {
      edible: false,
      toxic: false,
      warning: false
    },
    text: "Caprins"
  },
  sheep: {
    toxicities: {
      edible: false,
      toxic: false,
      warning: false
    },
    text: "Ovins"
  }
}

const FilterByAnimal = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formInputs, setFormInputs] = useState<AnimalsForm>(initialForm);
  const {originalPlantList, setFilteredPlantList} = useContext(PlantListContext);

  const togglePopup=(value: boolean)=>{
    setShowPopup(value)
  }

  const onInputChange = (e: any) => {
    const {
        checked
    } = e.target;

    const formField = e.target.id.split("-")[0] as keyof AnimalsForm;
    const toxicity = e.target.id.split("-")[1] as keyof Toxicities;

    let form = {...formInputs} as AnimalsForm;
    (form[formField].toxicities[toxicity] as any) = checked;
    setFormInputs(form);
  }

  const confirm = () => {
    let plantToxicities:any = {};
    Object.keys(formInputs).map((key:string) => {
      const keyform = key as keyof AnimalsForm;
      let res = [];
      if(formInputs[keyform].toxicities.edible){
        res.push(-1)
      }
      if(formInputs[keyform].toxicities.toxic){
        res.push(1)
      }
      if(formInputs[keyform].toxicities.warning){
        res.push(0)
      }
      plantToxicities[keyform]=res;
      return res
    })
    const filteredResults = originalPlantList.filter((plant:Plant) => {
      return Object.keys(plantToxicities).map((toxicityKey:any)=>{
        return plantToxicities[toxicityKey].includes(plant.toxicities[toxicityKey as keyof PlantToxicities])
      }).includes(true);
    })
    setFilteredPlantList(filteredResults);
    setShowPopup(false);
  }

  const cancel = () => {
    setShowPopup(false);
  }
  return <>
    <button className="secondary ghost filter-btn" onClick={()=>togglePopup(true)}>Filtrer par</button>
    <IonModal
      isOpen={showPopup}
      className="filter-animal-wrapper"
    >
      <IonHeader>

      <h1>Filtrer par: </h1>
      </IonHeader>
      <div className="content">
        <table>
          <thead>
            <tr>
                <th></th>
                <th> <div className="ico ico-edible">Comestible</div></th>
                <th> <div className="ico ico-toxic">Toxique</div></th>
                <th> <div className="ico ico-warning">Inconnu</div></th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(formInputs).map( (animal: string) =>{
                const animalField = animal as keyof AnimalsForm;
                let tdList = Object.keys(formInputs[animalField].toxicities).map( (key: string) =>{
                  return (
                    <td key={key}>
                      <div>
                        <input id={animal+'-'+key} type="checkbox" name={key} onChange={onInputChange}
                          className="no-label"  checked={formInputs[animalField].toxicities[key as keyof Toxicities]}/>
                        <label htmlFor={animal+'-'+key}></label>
                      </div>
                    </td>
                  )
                });

                return (
                  <tr key={formInputs[animalField].text}>
                    <th>{formInputs[animalField].text}: </th>
                    {tdList}
                  </tr>)
            })}
          </tbody>
        </table>

        <div className="actions">
          <button className="btn negative" onClick={cancel}>Annuler</button>
          <button className="btn default" onClick={confirm}>Confirmer</button>
        </div>
      </div>

    </IonModal>
  </>
}

export default FilterByAnimal;