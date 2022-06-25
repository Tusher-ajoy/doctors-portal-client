import React, { useContext } from 'react';
import loginBg from '../../../images/login.png';
import { useForm } from "react-hook-form";
import './Login.css'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase.config';
import { getAuth, getIdToken , createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { userContext } from '../../../App';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    const setUserToken = () =>{
        // auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        //     sessionStorage.setItem('userToken',idToken)
        //   }).catch(function(error) {
        //     // Handle error
        //   });
        const user = auth.currentUser;
        if (user) {
            getIdToken(user).then((token) => {
                sessionStorage.setItem('userToken',token);
            })
          }
    }

    const handleSignInWithPassword = ({email, password}) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    const handleSignWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const {displayName, email, photoURL} = result.user;
            const newUser = {
                name:displayName,
                email,
                photo:photoURL
            }
            setLoggedInUser(newUser);
            setUserToken();
            navigate(from, { replace: true });
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential);
        });
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => handleSignInWithPassword(data);
    return (
        <main className='container py-5' style={{height:'100vh'}}>
            <div className='row'>
                <div className='col-md-6'>
                <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                    <h5 className='text-secondary text-center mb-5'>Login</h5>
                    <input placeholder='Email' type='email' {...register("email", { required: true, maxLength: 20 })} />
                    {errors.email && <span>This field is required</span>}<br />

                    <input placeholder='Password' type='password' {...register("password", { required: true, minLength:8 })} />
                    {errors.password && <span>This field is required</span>}<br />

                    {<a href='/doSomething' style={{color:'red'}}>Forgot your password ?</a>}<br />
                    <input type="submit" disabled value='Login' className='mt-5' style={{background:'linear-gradient(100deg, #18D3B2 0%, #10CFEB 100%)',borderColor:'#1CC7C1', color:'white'}} />
                    <p className='text-secondary text-center'>Or,</p>
                    <button type="button" onClick={handleSignWithGoogle} className="btn btn-primary" style={{background:'linear-gradient(100deg, #18D3B2 0%, #10CFEB 100%)',borderColor:'#1CC7C1', padding:'10px 15px', width:'100%'}} >Sign in with google</button>
                </form>
                </div>
                <div className='col-md-6'>
                    <img style={{width:'85%'}} src={loginBg} alt='' />
                </div>
            </div>
        </main>
    );
};

export default Login;