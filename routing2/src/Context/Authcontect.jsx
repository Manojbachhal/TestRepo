import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
export const validate = createContext();

function Authcontect({children}) {

    const[login,setLogin]=useState(false);
    const handle=()=>{
        setLogin(!login);
    }
    
  return (
    <validate.Provider value={{login,handle}}>
        {children}
    </validate.Provider>
  )
}

export default Authcontect
