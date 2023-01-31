import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import NavigatorBar from './components/Navigator/NavigatorBar';
import AppRoutes from './routes/AppRoutes';
import { useState} from 'react';
import React from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const clientId = process.env.REACT_APP_CLIENT_ID;

    return (
        <div className="App">
            <GoogleOAuthProvider clientId={clientId||""}>
                <NavigatorBar className="NavigatorBar" isLoggedIn={isLoggedIn}/>
                <AppRoutes setIsLoggedIn={setIsLoggedIn}/>
            </GoogleOAuthProvider>
        </div>
    );
}

export default App;
