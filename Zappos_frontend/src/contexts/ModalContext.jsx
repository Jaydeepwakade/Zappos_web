import React, { createContext, useState } from 'react'

 export const ModalContext  = createContext()

 export function ModalProvider({children}) {
    const [ModalOpen, setModalOpen]=useState(false)
  return (
    <ModalContext.Provider value={{ModalOpen,setModalOpen}}>
        {children}
    </ModalContext.Provider>
  )
}


