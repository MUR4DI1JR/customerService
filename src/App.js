import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import {Switch, Route} from "react-router";
import Home from "./components/Home/home";
import signin from "./components/SignIn/signin";
import SignUp from "./components/SignUp/SignUp";
import {auth} from "./config/firebaseConfig";
import {clearCurrentUser, setCurrentUser} from "./redux/auth/authAction";


function App({currentUser, clearCurrentUser, setCurrentUser }) {
    useEffect(()=>{
        let unsubscribeFromAuth = null;

        unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
            if (user){
                setCurrentUser(user)
            }else {
                clearCurrentUser()
            }
        });

        return () => unsubscribeFromAuth();
    }, [currentUser, clearCurrentUser, setCurrentUser ]);

  return (
    <div className="App">
      <Navbar/>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/sign-in' component={signin}/>
          <Route exact path='/sign-up' component={SignUp}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state =>({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch =>({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    clearCurrentUser: () => dispatch(clearCurrentUser())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
