/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode } from 'react';
import {AppContext} from './AppContext'

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) =>{


  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )

}

export default AppProvider