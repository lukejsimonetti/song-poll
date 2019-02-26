
import React, { memo, useEffect } from 'react'

import PollAPIProvider from '../contexts/PollAPIContext'
import AppStateProvider from '../contexts/AppStateContext'
import AuthAPIProvider from '../views/auth/requireAuth';

const GlobalProvider = props => {

    return (
        <AuthAPIProvider>
            <AppStateProvider>
                <PollAPIProvider>
                    {props.children}
                </PollAPIProvider>
            </AppStateProvider>
        </AuthAPIProvider>
    )
}

export default memo(GlobalProvider)
