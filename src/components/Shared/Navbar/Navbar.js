import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const navigate = useNavigate();
    const handleSignOut = () =>{
        sessionStorage.removeItem('userToken')
        setLoggedInUser({})
        navigate(`/`)
    }
    const toggleLogin = () =>{
        if(sessionStorage.getItem('userToken')){
            handleSignOut();
        }
        else{
            navigate(`/login`);
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <a className="nav-link ms-5 active fw-bold" style={{color:'#11D0E6'}} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 fw-bold" style={{color:'#11D0E6'}} href="/#service">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 fw-bold" style={{color:'#11D0E6'}} href="/#reviews">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 fw-bold" style={{color:'#11D0E6'}} href="/dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 fw-bold" style={{color:'#11D0E6'}} href="/#contact-us">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 fw-bold" style={{color:'white', background:'#11D0E6', borderRadius:'5%', paddingLeft:'20px', paddingRight:'20px'}} href="/login" onClick={toggleLogin}>{sessionStorage.getItem('userToken') ? 'Logout' : 'Login'}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;