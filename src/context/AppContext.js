import {createContext, useState} from 'react';

// make context - will need curlies to get out
export const AppContext = createContext();

// make context provider
const AppContextProvider = ({children})=>{
    const [myList, setMyList] = useState(['item1'])
    
    const values = {
        myList,
        setMyList,
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}
// does not need curlies to get out
export default AppContextProvider

// children - anything belonging to the .js that belong inside the opening & closing tag
// Example: in App.js = button, input, TestPage...