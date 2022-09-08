import { createContext, useMemo, useState } from 'react'
import Plant from '../models/plant';

type PlantListContextType = {
    setGroupData: Function;
    groupData: {groups:[], groupCounts:[]};
    setFilteredPlantList: Function;
    filteredPlantList: Plant[];
};
const defaultContext: PlantListContextType = {
    setGroupData: () => {},
    groupData: {groups:[], groupCounts:[]},
    setFilteredPlantList: () => {},
    filteredPlantList: []
}
export const PlantListContext = createContext(defaultContext);

export const PlantListContextProvider = ({ children }:any) => {
    const [groupData, setGroupData] = useState({
        groups: [] = [],
        groupCounts: [] = []
    });
    const [filteredPlantList, setFilteredPlantList] = useState<Plant[]>([]);
    const value = useMemo(
        () => ({ groupData, setGroupData, filteredPlantList, setFilteredPlantList }), 
        [groupData, filteredPlantList]
    );

    return <PlantListContext.Provider value={value}>{children}</PlantListContext.Provider>
}