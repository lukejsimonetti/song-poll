import React, { memo, useState, useEffect } from 'react'

export const AppStateContext = React.createContext({})

const AppStateProvider = props => {
    const [isLoading, setIsLoading] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userName, setUserName] = useState("")

    return <AppStateContext.Provider value={{ 
            isLoading, setIsLoading,
            isAuthenticated, setIsAuthenticated,
            userName, setUserName,
        }}>
        {props.children}
    </AppStateContext.Provider>
}

export default memo(AppStateProvider)
