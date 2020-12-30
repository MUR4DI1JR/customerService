import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {auth} from './../../config/firebaseConfig';

const Navbar = ({currentUser}) => {
    return (
        <div className='navbar'>
            <div className="navbar_logo">
                firebase auth
            </div>
            <div className="links">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sign-in">Sign in</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sign-up">Sign Up</NavLink>
                    </li>
                    {currentUser && currentUser ?
                        <li>
                            <button onClick={()=> auth.signOut()}>sign out</button>
                        </li> : null
                    }
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = state =>({
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, null)(Navbar);