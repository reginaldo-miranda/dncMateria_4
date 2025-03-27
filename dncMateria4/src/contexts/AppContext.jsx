import { createContext, useState, useEffect, Children } from "react";
import {getApiData} from "../services/apiServices"

export const AppContext = createContext()
export const AppProvider = ({children}) => {

    const saveLanguage = localStorage.getItem('lang')

    const [language, setLanguage] = useState(saveLanguage ?? 'br')
    const [languages, setLanguages] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetcLanguages = async () => {
            try {
                const getText = await getApiData('webtext')
                setLanguages(getText)    
            } catch (e) {
                console.error(e)
            }finally{
                setLoading(false)
            }
        }
        fetcLanguages()
    }, [])

    useEffect(() => {
        localStorage.setItem('lang', language)
    },[language])

    return (
        <AppContext.Provider value={{language, languages, setLanguage, loading }}>
            {children}
        </AppContext.Provider>

        
    )
}

/*

import { createContext, useState, useEffect } from "react";
import { getApiData } from "../services/apiServices";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState("br");
    const [languages, setLanguages] = useState({}); // Estado inicial como objeto vazio
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const getText = await getApiData("webtext");
                if (getText) {
                    setLanguages(getText); // Apenas atualiza se os dados forem válidos
                }
            } catch (e) {
                console.error("Erro ao buscar idiomas:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchLanguages();
    }, []);

    return (
        <AppContext.Provider value={{ language, languages, setLanguage, loading }}>
            {children}
        </AppContext.Provider>
    );
};
*/
