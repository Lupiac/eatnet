import { IonPage } from '@ionic/react';
import { useContext } from 'react';
import NewSearch from '../../components/organisms/NewSearch/NewSearch';
import ResultsSearch from '../../components/organisms/ResultsSearch/ResultsSearch';
import { SearchContext } from '../../contexts/SearchContext';

const SearchTab: React.FC = () => {
  const {plantResults} = useContext(SearchContext);

  const manageSearch =()=>{
    return plantResults.length>0?<ResultsSearch/>:<NewSearch/>
  }
  return (
    <IonPage className='search-tab'>
        {manageSearch()}
      
    </IonPage>
  );
};

export default SearchTab;
