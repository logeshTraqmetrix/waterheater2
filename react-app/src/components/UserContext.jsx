// UserContext.js
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(''); // Default to admin for demonstration
  const [userData,setUserData] = useState({})
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/server/waterheater_1_function/getuser');
        setUserRole(res.data.role_details.role_name);
        console.log(res.data)
        setUserData(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
