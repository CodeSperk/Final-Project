import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
  const [user, setUser] = useState("null");
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // To create a user with email & pw
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //To login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  //update user
  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName:name
    })
  }

  //To logout user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }


  // Social Login
  const loginWithGoogle = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if(currentUser){
        //Get token & store client
        const userInfo ={ email: currentUser.email};
        axiosPublic.post("/jwt", userInfo)
        .then(res => {
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
          }
        })

      }else{
        //TODO: remove token (if token stored in the client side: local storage/ caching, in memory)
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    })
    return () => {
      return unSubscribe();
    } 
  },[axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOutUser,
    updateUser,
    loginWithGoogle
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes={
  children: PropTypes.node
}

export default AuthProvider;