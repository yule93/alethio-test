import React, {useState, useContext, createContext} from "react";
import { userLoginApi } from "../api";

const TokenContext = createContext();

const useUser = ({token, email, password}) => {
    return (
        <TokenContext.Provider value = {{email}}>
            {token}
        </TokenContext.Provider>
    )
}

export default useUser;