import { IonContent, IonHeader, IonIcon, IonPage, IonSearchbar, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import PlantResultCard from '../../components/organisms/PlantResultCard/PlantResultCard';
import Plant from '../../models/plant';
import { PlantService } from '../../services/plantService';
import { GroupedVirtuoso, GroupedVirtuosoHandle } from 'react-virtuoso'

const groupDataByFirstLetter = (array: Plant[]) : any => {
  let data = array.reduce((r:any, e:Plant) => {
    // get first letter of name of current element
    let group = e.name[0].normalize('NFD').replace(/\p{Diacritic}/gu, "").toLocaleUpperCase();
    // if there is no property in accumulator with this letter create it
    if(!r[group]) r[group] = {group, children: [e]}
    // if there is push current element to children array for that letter
    else r[group].children.push(e);
    // return accumulator
    return r;
  }, {})
  const groups = Object.values(data);
  const groupCounts = groups.map((x:any) =>{
    return x.children.length;
  })
  return {groups:groups, groupCounts:groupCounts};
}

const PlantListTab: React.FC = () => {
  const plantService = PlantService();
  const [plantList, setPlantList] = useState<Plant[]>([]);
  const [searchText, setSearchText] = useState("");
  const [groupData, setGroupData] = useState({groups:[], groupCounts:[]});
  const [filteredPlantList, setFilteredPlantList] = useState<Plant[]>([]);
  const platform = isPlatform('hybrid')?"hybrid":"desktop"
  const virtuoso = useRef<GroupedVirtuosoHandle>(null)

  // Get all plant toxicities at page load
  useEffect(()=>{
    plantService.getAllPlantsToxicity().then((resPlantList: Plant[]) => {
      setPlantList(resPlantList||[]);
      setFilteredPlantList(resPlantList)
    })
  }, [])
  
  // Filters plantList 
  useEffect(() => {
    const filteredList = plantList.filter((x: Plant) => {
      return x.containsString(searchText)
    })
    setFilteredPlantList(filteredList)
  }, [searchText])

  // Get all plant toxicities at page load
  useEffect(()=>{
    setGroupData(groupDataByFirstLetter(filteredPlantList))
  }, [filteredPlantList])

  return (
    <IonPage>
      <IonContent fullscreen>        
        <IonHeader>
          <IonToolbar>
            <h1>Liste d'aliments</h1>
              <IonSearchbar value={searchText} onIonChange={e=> setSearchText(e.detail.value!)}/>
            <div className='search-wrapper'>
              <div>{filteredPlantList.length} espèce{filteredPlantList.length>1?"s":""}</div>
              <div>Trier par: Nom</div>
            </div>
          </IonToolbar>
        </IonHeader>
        <GroupedVirtuoso
          className='plantlist-wrapper'
          ref={virtuoso}
          groupCounts={groupData.groupCounts}
          groupContent={index => {
            return <div style={{
              color: 'transparent'
            }}>{groupData.groups[index]['group']}</div>
          }}
          itemContent={index =>
            filteredPlantList[index]?<PlantResultCard plant={filteredPlantList[index]}/>:''
          }
        />
      <ul
        className='scroll-letters-wrapper'
      >
        {groupData.groupCounts
          .reduce(
            ({ firstItemsIndexes, offset }:{firstItemsIndexes:number[], offset:number}, count) => {
              return {
                firstItemsIndexes: [...firstItemsIndexes, offset],
                offset: offset + count,
              }
            },
            { firstItemsIndexes: [], offset: 0 }
          )
          .firstItemsIndexes.map((itemIndex, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault()
                  if(virtuoso.current){
                    virtuoso['current'].scrollToIndex({
                      index: itemIndex,
                    })
                  }
                }}
              >
                {groupData.groups[index]['group']}
              </a>
            </li>
          ))}
      </ul>
      </IonContent>
    </IonPage>
  );
};

export default PlantListTab;
