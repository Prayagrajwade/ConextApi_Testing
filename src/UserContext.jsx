import React, { useState, createContext } from 'react';

// Create the context with default values
const UserContext = createContext({
  user: null,
  setUser: () => {},
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUserDetails = ({ userName, Password }) => {
    setUser({ userName, Password });
  };

  return (
    <UserContext.Provider value={{ user, setUser: setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
