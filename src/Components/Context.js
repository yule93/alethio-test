import React, {useState, useContext, createContext} from "react";

const TokenContext = createContext();

const Token = ({token, email}) => {
    return (
        <TokenContext.Provider value = {{email}}>
            {token}
        </TokenContext.Provider>
    )
}

export default Token;