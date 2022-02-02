import React, { createContext, useCallback, useState } from "react";
import Api from "../services/Api";

export const Context = createContext({
    loading: false,
    user: {},
})

const Provider = ({ children }) => {

    const [userState, setUserState] = useState({
        hasUser: false,
        loading: false,
        user: {
            email: undefined,
            token: undefined
        },
    });

    const contextValue = {
        userState,
    }
    return (
       <Context.Provider value={ contextValue }>
           { children }
       </Context.Provider> 
    )
}