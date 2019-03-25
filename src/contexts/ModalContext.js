import React, { memo, useState } from 'react'

export const ModalContext = React.createContext({})

const ModalProvider = props => {
    // state
    const [currentModal, setCurrentModal] = useState({name: "LOGIN"})

    return <ModalContext.Provider value={{ currentModal, setCurrentModal }}>{props.children}</ModalContext.Provider>
}

export default memo(ModalProvider)
