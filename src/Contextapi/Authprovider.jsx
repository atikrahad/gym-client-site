import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../Firebase/firebase";

export const Authcontext = createContext();
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAcount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    createAcount,
  };

  return <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>;
};

export default Authprovider;
