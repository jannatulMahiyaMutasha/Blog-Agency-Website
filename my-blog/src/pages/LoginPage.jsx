import React, { useState } from "react";
import axios from "axios";
import "../assets/css/login.css";

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/api/login", { email, password });

            if (response.data.status === "success") {
                alert("Login successful!");
                localStorage.setItem("token", response.data.token); // Store token in localStorage
                onLogin(true); // Update parent component state
            } else {
                setError(response.data.msg || "Invalid email or password.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2 className="text-center">Login</h2>

                {/* Display error message */}
                {error && <p className="error-msg">{error}</p>}

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
