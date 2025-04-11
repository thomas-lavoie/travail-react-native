import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accentColor, setAccentColor] = useState("#4169e1");

  return (
    <AuthContext.Provider
      value={{ user, setUser, accentColor, setAccentColor }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export class User {
  constructor(username, password, picture, recording) {
    this.username = username;
    this.password = password;
    this.picture = picture;
    this.recording = recording;
  }
}

export const useAuth = () => useContext(AuthContext);
