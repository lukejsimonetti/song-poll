import React, {useEffect} from 'react';

const AuthWrapper = props => {
    useEffect(
        () => {
            console.log("logged")
        }
    )
    return (
        <AuthWrapper>
            {/* {props.children} */}
        </AuthWrapper>
    );
};

export default AuthWrapper;