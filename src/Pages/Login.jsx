import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/FirebaseConfig'; // Adjust the path if necessary

function Login() {
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const signin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            // The signed-in user info.
            const user = result.user;
            console.log('User:', user);
            
            // Redirect to the home page after successful login
            navigate('/');
        } catch (error) {
            console.error('Error during sign-in:', error.message);
            // Optionally show an error message to the user
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex justify-center mb-3'>
                <button
                    onClick={signin}
                    className='bg-yellow-500 w-64 text-2xl text-black font-bold px-2 py-2 rounded-lg'>
                    Login with Google
                </button>
            </div>
        </div>
    );
}

export default Login;
