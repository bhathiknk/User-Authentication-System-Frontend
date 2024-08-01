import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Signup.css'; // Custom CSS for additional styling

function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
    };

    return (
        <div className="signup-container d-flex justify-content-center align-items-center">
            <div className="card p-4 shadow-sm">
                <h3 className="text-center mb-4">Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="text-center mb-3">
                        <small className="text-muted">
                            By creating an account, you agree to the{' '}
                            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                        </small>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">
                        Create a new account
                    </button>
                </form>
                <div className="text-center mb-3">
                    <span className="text-muted">Haven't an account? <a href="/SignIn">Sign In</a></span>
                </div>
                <div className="text-center mb-3">
                    <hr />
                    <span className="or-text">or</span>
                    <hr />
                </div>
                <button className="btn btn-outline-primary w-100 mb-2">
                    <img src="/google.svg" alt="Google Logo" className="me-2" style={{ height: '20px' }} />
                    Login with Google
                </button>
                <button className="btn btn-outline-secondary w-100">
                    <img src="/microsoft.svg" alt="Microsoft Logo" className="me-2" style={{ height: '20px' }} />
                    Login with Microsoft
                </button>
            </div>
        </div>
    );
}

export default SignUp;
