import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLoginWithGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const providerLogWithGithub = (provider) =>{
        return signInWithPopup(auth , provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            // console.log('user inside state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        }));
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = { user, providerLoginWithGoogle, logOut, createUser, signIn, loading, providerLogWithGithub }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;