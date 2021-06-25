import React, { useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: "",
        token: "",
        isLogin: false
    });

    const logUserIn = ({email, token}) => setUser({ email, token, isLogin: true });
    return (
        <UserContext.Provider value = {{ user, logUserIn }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;