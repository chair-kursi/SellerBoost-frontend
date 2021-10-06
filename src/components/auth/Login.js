import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { handleSignIn } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    var doSignIn = (email, pass) =>{
        const signin = handleSignIn(email, pass);
        if(signin)
        history.push("/");
    }

    return (
        <div>
            <label>Email</label>
            <input type="email" placeholder="enter suprEmail" onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" placeholder="enter suprPassword" onChange={(e) => setPass(e.target.value)} />
            <button onClick={() => doSignIn(email, pass)}>Submit</button>
        </div>
    )
}

export default Login
