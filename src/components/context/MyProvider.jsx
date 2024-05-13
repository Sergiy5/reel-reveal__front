import React, { createContext, useContext } from 'react';

const MyContext = createContext({});

export const useSize = () => useContext(MyContext); 

export default function MyProvider({ children, value }) {


  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
