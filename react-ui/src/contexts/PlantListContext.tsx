import { createContext, useMemo, useRef, useState } from 'react'
import { GroupedVirtuosoHandle } from 'react-virtuoso';
import Plant from '../models/plant';

type PlantListContextType = {
    setGroupData: Function;
    groupData: {groups:[], groupCounts:[]};
    filteredPlantList: Plant[];
    setFilteredPlantList: Function;
    originalPlantList: Plant[];
    setOriginalPlantList: Function;
    virtuoso: any
};
const defaultContext: PlantListContextType = {
    setGroupData: () => {},
    groupData: {groups:[], groupCounts:[]},
    filteredPlantList: [],
    setFilteredPlantList: () => {},
    originalPlantList: [],
    setOriginalPlantList: () => {},
    virtuoso: null
}
export const PlantListContext = createContext(defaultContext);

export const PlantListContextProvider = ({ children }:any) => {
    const [groupData, setGroupData] = useState({
        groups: [] = [],
        groupCounts: [] = []
    });
    const [filteredPlantList, setFilteredPlantList] = useState<Plant[]>([]);
    const [originalPlantList, setOriginalPlantList] = useState<Plant[]>([]);
    let virtuoso = useRef();
    const value = useMemo(
        () => ({ groupData, setGroupData, filteredPlantList, setFilteredPlantList, originalPlantList, setOriginalPlantList, virtuoso }), 
        [groupData, filteredPlantList, originalPlantList, virtuoso]
    );

    return <PlantListContext.Provider value={value}>{children}</PlantListContext.Provider>
}