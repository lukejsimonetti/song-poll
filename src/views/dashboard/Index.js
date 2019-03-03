import React, { useContext, useEffect } from 'react';
import {withRouter} from 'react-router-dom'


const Index = props => {
    return (
            <div>
                index
                <button onClick={() => props.history.push(`/poll/add`)}>
                move
                </button>
                
                <button onClick={() => props.history.push(`/login`)}>
                login
                </button>
            </div>
    );
};

export default withRouter(Index);