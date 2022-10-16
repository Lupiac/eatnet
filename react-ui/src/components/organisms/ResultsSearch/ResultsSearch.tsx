import { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import PlantnetAnalysisResult from "../../../models/plantnetAnalysisResult";
import PlantAnalysisResultCard from "../PlantAnalysisResultCard/PlantAnalysisResultCard";
import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/react";
import { arrowBack } from "ionicons/icons";

const ResultsSearch= () => {
    const {plantResults, setPlantResults} = useContext(SearchContext);

    return (<>
        <IonHeader>
            <IonToolbar>
                <div className="row">
                    <button className="back-btn" onClick={() => setPlantResults([])}>
                        <IonIcon icon={arrowBack}></IonIcon>
                    </button>
                    <h2>Résultat(s) de la recherche</h2>
                </div>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <div className="results-search-wrapper">
                <ul className="results-wrapper">
                    {plantResults.map((plantResult:PlantnetAnalysisResult)=>{
                        return <PlantAnalysisResultCard plant={plantResult} key={plantResult.name||plantResult.scientificName}/>
                    })}
                </ul>
            </div>
        </IonContent>
    </>
      );
};
  
export default ResultsSearch;