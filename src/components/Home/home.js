import React from 'react';
import {connect} from 'react-redux';

const Home = ({currentUser}) => {
    return (
        <div>
            <h1>Home</h1>
            {currentUser && currentUser ? (
                <p>hello {currentUser.email}</p>
            ): (<p>you are log out, please sign in</p>)}
        </div>
    );
};

const mapStateToProps = state =>({
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Home);