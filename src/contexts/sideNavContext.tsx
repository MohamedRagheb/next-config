import React, { createContext, useState, useContext } from 'react'
type myContextType = {
 isOpen: boolean
 toggleSideNavStatus: () => void
}

const SideNavContext = createContext<myContextType | false>(false)
export const SideNavContextProvider: React.FC<any> = ({
 children,
}: {
 children: React.ReactNode
}) => {
 const [isOpen, setIsOpen] = useState<boolean>(false)
 const toggleSideNavStatus = () => {
  setIsOpen(!isOpen)
 }
 return (
  <SideNavContext.Provider value={{ isOpen, toggleSideNavStatus }}>
   {children}
  </SideNavContext.Provider>
 )
}

export const useMySideNavContext = () => {
 const context = useContext(SideNavContext)
 if (!context) {
  throw new Error('useMyContext must be used within a MyContextProvider')
 }
 return context
}
