import { createContext, useContext, useState } from "react";


export const ChosenCourse = createContext();
export const ContextProvider = ({children})=>{
    const [chosenCourse,setChosenCourse]=useState('');
    const [logged,setLog]=useState('');
     const [cartInfo,setCartInfo]=useState(() => {
         const stored = localStorage.getItem('cartInfo');
         try {
             return stored ? JSON.parse(stored) : [];
         } catch {
             return [];
         }
     })

    return (
        <ChosenCourse.Provider value={{chosenCourse,setChosenCourse,logged,setLog, cartInfo,setCartInfo}}>
            {children}
        </ChosenCourse.Provider>
    )
};
export const useCourse = ()=>useContext(ChosenCourse)