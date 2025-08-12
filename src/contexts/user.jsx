import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";

const UserContext = createContext();


function UserContextProvider({children}) {

    const [getToken, setToken] = useState(null);
    const [getRefeshToken, setRefeshToken] = useState(null);
    const [isLogged, setLogged] = useState(false);
    const [getUserData, setUserData] = useState(null);

   
    return (
        <UserContext.Provider value={{getToken, getRefeshToken, isLogged, getUserData}}>{children}</UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };



export const useUser = () => {
    return useContext(UserContext);
  };
  