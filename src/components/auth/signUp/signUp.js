import React, {useState} from 'react';
import {auth} from './../../../config/firebaseConfig';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSignUp = (e) =>{
        e.preventDefault();

        if (password === passwordConfirm){
            auth.createUserWithEmailAndPassword(email, password)
                .then(user => console.log(user))
                .catch(err => console.log(err))
        }else {
            alert("password no accept")
        }
    };

    return (
        <div>
            <h1>Sign Up page</h1>
            <form>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="repeat password"
                    value={passwordConfirm}
                    onChange={(e)=> setPasswordConfirm(e.target.value)}
                />
                <button onClick={handleSignUp}>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;