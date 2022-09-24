import { IonHeader, IonSearchbar, IonToolbar } from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { PlantListContext } from "../../../contexts/PlantListContext";
import Plant from "../../../models/plant";
import FilterByAnimal from "../FilterByAnimal/FilterByAnimal";

const PlantListHeader= () => {
    const [searching, setSearching] = useState(false);
    const [searchText, setSearchText] = useState("");
    const {filteredPlantList, setFilteredPlantList, originalPlantList} = useContext(PlantListContext);

    const toggleSearch = () =>{
        setSearching(!searching);
    }

    // Filters plantList by searching searchText in plant's fields
    useEffect(() => {
        const filteredList = originalPlantList.filter((x: Plant) => {
        return x.containsString(searchText)
        })
        setFilteredPlantList(filteredList)
    }, [searchText])

    return (
        <>
            <IonHeader className="plantlist-header">
                <IonToolbar>
                    <div className="row">
                    <h1>Liste d'aliments</h1>
                    <button onClick={()=>toggleSearch()} className={`ghost secondary search-btn ${searching?"  ico-close":" ico-search"}`}></button>
                    </div>
                    {searching?<IonSearchbar value={searchText} onIonChange={e=> setSearchText(e.detail.value!)}/>:''}
                    <div className='search-wrapper'>
                        <div>{filteredPlantList.length} espèce{filteredPlantList.length>1?"s":""}</div>
                        <FilterByAnimal></FilterByAnimal>
                    </div> 
                </IonToolbar>
            </IonHeader>
        </>
    );
};
  
export default PlantListHeader;