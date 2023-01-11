import React, { createContext, useEffect, useReducer, useState } from 'react'
export const DataUeser= createContext()




const DataFile = ({kids}) => {
  const [state, dispatch] = useReducer(reducer, {});

const [user, setUser]=useState()
function reducer(){}
useEffect(()=>{


localStorage.setItem("user",JSON.stringify(user))



}, [user])



  return (
   <DataUeser.Provider value={{user,setUser }}>
    {kids}
   </DataUeser.Provider>
  )
}

export default DataFile