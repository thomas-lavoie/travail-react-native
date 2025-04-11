import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export class User {
  constructor(username, password, picture, recording, color) {
    this.username = username;
    this.password = password;
    this.picture = picture;
    this.recording = recording;
    this.color = color;
  }
}

export const useAuth = () => useContext(AuthContext);
