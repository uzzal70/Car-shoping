import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();


const useFirebase = () =>
{

    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState();
    const [isLoading, setIsLoading] = useState(true);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const auth = getAuth();
    const googleProvier = new GoogleAuthProvider();

    // User login email and password 
    // const auth = getAuth();
    const userLogin = (email, password, location, history) =>
    {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>
            {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // const user = userCredential.user;
                // console.log(user);
                // return user;
            })
            .catch((error) =>
            {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    // User Registretion
    const registerUsingEmail = (email, password, name) =>
    {
        // const auth = getAuth();
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>
            {
                // const user = userCredential.user;
                const newUser = { email, displayName: name };
                setUser(newUser);
                console.log(newUser);
                //Save user to the Database
                saveUser(email, name, 'POST');
                //send name to fairbase after creation 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() =>
                {

                }).catch((error) =>
                {
                    //an error
                });
            })
            .catch((error) =>
            {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }
    const signInUsingGoogle = () =>
    {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvier)
            .then((result) =>
            {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                // return user;
            })
            .catch((error) =>
            {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    // ovserve user chanege or not
    useEffect(() =>
    {
        const unsubscribed = onAuthStateChanged(auth, (user) =>
        {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    //Admin Chack
    useEffect(() =>
    {
        fetch(`https://enigmatic-river-03498.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    },
        [user.email]
    )

    const logOut = () =>
    {
        signOut(auth)
            .then(() =>
            {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }
    const saveUser = (email, displayName, method) =>
    {
        const user = { email, displayName };
        fetch('https://enigmatic-river-03498.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user,
        admin,
        signInUsingGoogle,
        registerUsingEmail,
        userLogin,
        isLoading,
        logOut
    }

}
export default useFirebase;
