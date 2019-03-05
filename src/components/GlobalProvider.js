
import React, { memo, useEffect } from 'react'

import ModalProvider from '../contexts/ModalContext'
import PollAPIProvider from '../contexts/PollAPIContext'
import AppStateProvider from '../contexts/AppStateContext'

const GlobalProvider = props => {

    return (
            <AppStateProvider>
                <PollAPIProvider>
                    <ModalProvider>
                        {props.children}
                    </ModalProvider>
                </PollAPIProvider>
            </AppStateProvider>
    )
}

export default memo(GlobalProvider)
