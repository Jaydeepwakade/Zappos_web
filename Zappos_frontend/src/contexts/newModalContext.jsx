import React, { createContext, useState } from 'react'

export const NewModalContext = createContext()

function NewModalProvider({children}) {
    const [newModalopen, setnewModalopen] =useState(false)
  return (
   <NewModalContext.Provider value={{newModalopen, setnewModalopen}}>
    {children}
   </NewModalContext.Provider>
  )
}

export default NewModalProvider
