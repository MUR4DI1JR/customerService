import React, {useEffect} from 'react';
import {Switch, Route} from "react-router";
import {connect} from 'react-redux';
import Home from './components/pages/Home/Home';
import SignIn from './components/auth/signIn/signIn';
import SignUp from "./components/auth/signUp/signUp";
import {auth} from "./config/firebaseConfig";
import {clearCurrentUser, setCurrentUser} from "./redux/auth/authAction";
import SendDb from "./components/pages/sendDB/sendDB";



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
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/sign-in' component={SignIn}/>
              <Route exact path='/sign-up' component={SignUp}/>
              <Route exact path='/send-email' component={SendDb}/>
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
