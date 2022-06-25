import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../../../App';

const RequireAuth = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    let location = useLocation();
    
    if(sessionStorage.getItem('userToken') || loggedInUser.email){
        return children;
    }
    else{
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    
};

export default RequireAuth;