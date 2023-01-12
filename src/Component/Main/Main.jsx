import React, { useContext } from 'react'
import { DataUeser } from '../../DataOfUser'
import Register from '../Register/Register'
const Main = () => {
    const {user} = useContext(DataUeser)
  return (
    
    <div>

{!user? <Register/> : <h1>welcome</h1>}


    </div>
  )
}

export default Main