import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accentColor, setAccentColor] = useState("#4169e1");
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        accentColor,
        setAccentColor,
        picture,
        setPicture,
        audio,
        setAudio,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

export const useAuth = () => useContext(AuthContext);
