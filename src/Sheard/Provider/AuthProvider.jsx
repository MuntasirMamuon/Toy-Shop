import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

export const AuthContext=createContext(null);
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

    const signGoogleProvider= new GoogleAuthProvider()
    const signGitHubProvider= new GithubAuthProvider();
 

    // userName and userPhotoUrl function 

    const userDetails=(name,photoUrl)=>{
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photoUrl
        })
        .then(() => setUser((user) => (
          { ...user, displayName: name, photoURL: photoUrl })))
       .catch((error) => { console.log(error) });
      }



    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,signGoogleProvider)
    }

    const signInWithGithub=()=>{
        setLoading(true)
        return signInWithPopup(auth,signGitHubProvider)
    }



    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        setLoading(true)
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            // console.log(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub,
        userDetails

    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;