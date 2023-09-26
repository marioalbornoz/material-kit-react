import PropTypes from 'prop-types';
import { reactLocalStorage } from "reactjs-localstorage";

const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();

AuthProvider.propTypes = {
    children: PropTypes.object,
   
  };
function AuthProvider({children}){
    
    const [auth, setAuth] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() =>{
        if(auth.name){
            setIsAuthenticated(true);
            reactLocalStorage.setObject("auth", auth);
            

        } else{ setIsAuthenticated(false)
            
        };
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