import { createContext, useMemo, useState } from 'react'

type CurrentUserContextType = {
    setCurrentUser: Function;
    currentUser: any;
};
const defaultContext: CurrentUserContextType = {
    setCurrentUser: () => {},
    currentUser: null
}
export const CurrentUserContext = createContext(defaultContext);

export const CurrentUserContextProvider = ({ children }:any) => {
    const [currentUser, setCurrentUser] = useState(null)

    const value = useMemo(
        () => ({ currentUser, setCurrentUser }), 
        [currentUser]
    );

    return <CurrentUserContext.Provider value={value}>{children}</CurrentUserContext.Provider>
}