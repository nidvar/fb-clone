import { useState } from "react";

const Login = function () {
    const [formData, setFormData] = useState({});

    const handleChange = function(e){
        console.log('handling change', e.target.value, e.target.name)
    };

    return (
        <>
            <form className="my-login-form">
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={FormData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Email address or phone number"
                        value={FormData.password}
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
