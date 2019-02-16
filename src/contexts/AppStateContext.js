import React, { memo, useState } from 'react'

export const AppStateContext = React.createContext({})

const AppStateProvider = props => {

    const [isLoading, setIsLoading] = useState(false)

    return <AppStateContext.Provider value={{ isLoading, setIsLoading}}>
        {props.children}
    </AppStateContext.Provider>
}

export default memo(AppStateProvider)
