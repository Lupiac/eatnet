import { createContext, useMemo, useRef, useState } from 'react'
import PlantnetAnalysisResult from '../models/plantnetAnalysisResult';

type SearchContextType = {
    setPlantResults: Function;
    plantResults: PlantnetAnalysisResult[];
};
const defaultContext: SearchContextType = {
    setPlantResults: () => {},
    plantResults: [],
}
export const SearchContext = createContext(defaultContext);

export const SearchContextProvider = ({ children }:any) => {
    const [plantResults, setPlantResults] = useState<PlantnetAnalysisResult[]>([]);
    const value = useMemo(
        () => ({ plantResults, setPlantResults}), 
        [plantResults]
    );

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}