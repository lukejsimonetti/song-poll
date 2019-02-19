import React, { useContext, useEffect } from 'react';


const Index = props => {
    return (
            <div>
                index
                <button onClick={() => props.history.push(`/poll/add`)}>
                move
                </button>
            </div>
    );
};

export default Index;