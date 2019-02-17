import React, { memo, useState, useEffect } from 'react'
import axios from 'axios'
export const PollAPIContext = React.createContext({})

const PollAPIProvider = props => {

    useEffect(() =>{
        getPolls()
    }, [])
    
    const [polls, setPoll] = useState([])
    
    const getPolls = () => {
        axios.get('/api/polls')
        .then((res) => {
            setPoll(res.data)
        })
    }
    const getPoll = (slug) => {
        return axios.get(`/api/poll/${slug}`)
    }
    
    const addPoll = (data) => {
        axios.post('/api/poll', {...data})
        .then(res => {
            setPoll(res.data)
        })
    }

    return <PollAPIContext.Provider value={{ polls, addPoll, getPoll }}>
        {props.children}
    </PollAPIContext.Provider>
}

export default memo(PollAPIProvider)
