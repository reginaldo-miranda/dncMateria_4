import { createContext, useState, useEffect, Children } from "react";
import {getApiData} from "../services/apiServices"

export const AppContext = createContext()
export const AppProvider = ({children}) => {
    const [language, setLanguage] = useState('br')
    const [languages, setLaanguages] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetcLanguages = async () => {
            try {
                const getText = await getApiData('webtext')
                setLaanguages(getText)    
            } catch (e) {
                console.error(e)
            }finally{
                setLoading(false)
            }
        }
        fetcLanguages()
    }, [])
    return (
        <AppContext.Provider value={{language, languages, setLanguage, loading }}>
            {children}
        </AppContext.Provider>

        
    )
}