import React, { createContext, useContext, useState } from 'react'


export const StateContext = createContext()


export const StateProvider = ({ children }) => {

    const [stateValue, dispatch] = useState({ user: null })


    return (
        <StateContext.Provider value={...stateValue}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateValue = () => useContext(StateContext)
