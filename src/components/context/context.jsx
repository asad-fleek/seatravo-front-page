import React from 'react'
import { createContext } from 'react'
import { routes } from '../../utils/routes'


const data =  routes

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeDataContext = createContext(data)

export const ThemeContext = ({children} ) => {


  return (
 
      <ThemeDataContext.Provider value ={data} >
        {children}  
      </ThemeDataContext.Provider>

  )
}
