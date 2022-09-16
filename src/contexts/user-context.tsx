import React, { useState, PropsWithChildren } from "react";

interface UserContextObj {
  userName: string;
  userEmail: string;
  userPass: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPass: (pass: string) => void;
}

export const UserContext = React.createContext<UserContextObj>({
  userName: "",
  userEmail: "",
  userPass: "",
  setName: (name: string) => {},
  setEmail: (email: string) => {},
  setPass: (pass: string) => {},
});

const UserContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const setUserName = (name: string) => {
    setName(name);
  };
  const setUserEmail = (email: string) => {
    setEmail(email);
  };
  const setUserPass = (pass: string) => {
    setPassword(pass);
  };

  const userContextVal: UserContextObj = {
    userName: name,
    userEmail: email,
    userPass: password,
    setName: setUserName,
    setEmail: setUserEmail,
    setPass: setUserPass,
  };

  return (
    <UserContext.Provider value={userContextVal}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
