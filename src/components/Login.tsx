import { useState } from "react";

const Login = function () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>){
        if(e.target.name == 'password'){
            setPassword(e.target.value);
        }else{
            setEmail(e.target.value);
        }
    }

    const handleSubmit = function(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <>
            <form className="my-login-form" onSubmit={function(e){handleSubmit(e)}}>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Email address or phone number"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button>Log in</button>
                <p>Forgotten password?</p>
                <button>Create new account</button>
                <button>Log in as guest</button>
            </form>
            <p>Meta</p>
            <div className='my-login-footer'>
                <p>About</p>
                <p>Help</p>
                <p>More</p>
            </div>
        </>
    );
};

export default Login;
