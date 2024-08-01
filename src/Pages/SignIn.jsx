import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Signup.css'; // Custom CSS for additional styling
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/signin', {
                email: formData.email,
                password: formData.password
            });

            // Handle successful sign-in
            console.log('Sign In successful:', response.data);
            toast.success('Sign In successful!');
            // Clear input fields
            setFormData({
                email: '',
                password: '',
                confirmPassword: '',
            });
            // Redirect or perform actions upon successful sign-in
            // For example, if using react-router:
            // history.push('/dashboard');

        } catch (error) {
            // Handle error
            console.error('There was an error signing in!', error.response?.data || error.message);
            toast.error('Sign In failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className="signup-container d-flex justify-content-center align-items-center">
            <div className="card p-4 shadow-sm">
                <h3 className="text-center mb-4">Sign In</h3>
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
                    <div className="text-center mb-3">
                        <small className="text-muted">
                            By signing in, you agree to the{' '}
                            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                        </small>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">
                        Log In
                    </button>
                </form>
                <div className="text-center mb-3">
                    <span className="text-muted">Don't have an account? <a href="/">Sign Up</a></span>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default SignIn;
