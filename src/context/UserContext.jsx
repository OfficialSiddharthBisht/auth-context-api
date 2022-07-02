import React , {createContext} from 'react';

export const AuthContext = createContext();

function AuthContextProvider({children}){
    const [isAuth, toggleAuth] = React.useState(false);
    return(
        <AuthContext.Provider value = {{isAuth,toggleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;