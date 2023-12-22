import React, { createContext,useState } from 'react'

export const AppContext = createContext();
const ParentContext = ({children}) => {

    const [isDark,setIsDark] = useState(true)
    const [page,setPage] = useState("Home")
    const [score,setScore] = useState(0)

  return (
    <AppContext.Provider value={{isDark,setIsDark,page,setPage,score,setScore}}>{children}</AppContext.Provider>
    )
}

export default ParentContext