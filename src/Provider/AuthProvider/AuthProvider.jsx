import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config.init";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const signUp = (name, photo, email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
const gitHubLogIn =()=>{
    return signInWithPopup(auth,gitHubProvider)
}
    const logOut = () => {
        setLoading(true)
        return (signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch(error => {
                console.log(error.message)
            }))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            if (currentUser) {
                setUser(currentUser);
            }
        })
        return () => {
            unSubscribe();
        }

    }, [user])
    const authInfo = {
        user,

        loading,
        setUser,
        signUp,
        logOut,
        logIn,
        googleLogIn,
        gitHubLogIn,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;