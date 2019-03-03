
import React, { memo, useEffect } from 'react'

import PollAPIProvider from '../contexts/PollAPIContext'
import AppStateProvider from '../contexts/AppStateContext'

const GlobalProvider = props => {

    return (
            <AppStateProvider>
                <PollAPIProvider>
                    {props.children}
                </PollAPIProvider>
            </AppStateProvider>
    )
}

export default memo(GlobalProvider)
