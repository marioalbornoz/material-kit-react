import PropTypes from 'prop-types';

const { createContext, useState, useEffect } = require("react");


export const AuthContext = createContext();

AuthProvider.propTypes = {
    children: PropTypes.object,
   
  };
function AuthProvider({children}){

    const [auth, setAuth] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() =>{
        if(auth){
            setIsAuthenticated(true);
        } else setIsAuthenticated(false);
    },[auth])
    return(
        <AuthContext.Provider value={{
            isAuthenticated,
            auth,
            setAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;