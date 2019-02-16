import React, { memo, useState } from 'react'

export const PollAPIContext = React.createContext({})

const PollAPIProvider = props => {

    const [polls, setPoll] = useState([])

    const addPoll = v => {
        const pollName = v.poll_name
        const formVals = v.items

        setPoll([...polls, {pollName: pollName, values: formVals}])
    }

    return <PollAPIContext.Provider value={{ polls, addPoll }}>
        {props.children}
    </PollAPIContext.Provider>
}

export default memo(PollAPIProvider)
