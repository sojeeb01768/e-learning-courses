import { createContext } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const providerLoginWithPopup =(provider)=>{
        return signInWithPopup(auth, provider);
    }

    const user = { displayName: 'Sojeeb islam' }
    const authInfo = { user, providerLoginWithPopup  }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;