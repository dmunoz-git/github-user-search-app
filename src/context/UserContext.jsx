import React, {useState} from 'react';

export const UserContext = React.createContext({user: {}, setUser: () => {}});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "Uknown",
        login: "Unknown",
        created_at: "",
    });
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

