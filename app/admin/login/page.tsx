"use client"

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LoginPageProps {
    msg?: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ msg }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(msg);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // API request to the login endpoint
        const response = await fetch('/api/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            // Handle successful login here
            // For example, redirect to the dashboard
            router.push('/admin/dashboard');
        } else {
            // If the login failed, set an error message
            const result = await response.json();
            setErrorMessage(result.message || 'Login failed');
        }
    };

    return (
        <div>
            <Link href="/">Home</Link><br/>
            {errorMessage && <h3 className="red">{errorMessage}</h3>}
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    id="username"
                    type="text"
                    placeholder='username'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br/>
                <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default LoginPage;
