import { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const authContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  // all state---------------------------------
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [studentData, setStudentData] = useState([]);
  const [myData, setMyData] = useState(null);
  const [upcomingNotices, setUpcomingNotices] = useState([]);

  const allStudentsMail = studentData.map((student) => student.email);
  useEffect(() => {
    fetch("https://csejnu-server-production.up.railway.app/allDataofCSE13")
      .then((res) => res.json())
      .then((data) => {
        setStudentData(data);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    const url = `https://csejnu-server-production.up.railway.app/getMySpecificInfoUsingMail?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, [user]);

  useEffect(() => {
    setLoading(true);
    fetch("https://csejnu-server-production.up.railway.app/upcomingNotices")
      .then((res) => res.json())
      .then((data) => {
        setUpcomingNotices(data);
        setLoading(false);
      });
  }, [user]);

  // Sign in method  ---------------------------
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, [user]);
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    name: "abir",
    studentData,
    loading,
    facebookLogin,
    googleLogin,
    user,
    setUser,
    allStudentsMail,
    logout,
    myData,
    upcomingNotices,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
