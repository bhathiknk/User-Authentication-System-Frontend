import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Signup.css'; // Custom CSS for additional styling
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }

        if (formData.password.length < 6) {
            toast.error('Password must be at least 6 characters long!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                email: formData.email,
                password: formData.password
            });

            // Handle successful signup
            console.log('Signup successful:', response.data);
            toast.success('Signup successful!');

            // Clear input fields
            setFormData({
                email: '',
                password: '',
                confirmPassword: '',
            });

            // Optionally redirect or navigate to another page
            // For example, if using react-router:
            // history.push('/signin');

        } catch (error) {
            // Handle error
            console.error('There was an error signing up!', error.response?.data || error.message);
            toast.error('Signup failed. Please try again.');
        }
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
                    <span className="text-muted">Already have an account? <a href="/SignIn">Sign In</a></span>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default SignUp;
