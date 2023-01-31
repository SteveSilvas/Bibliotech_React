import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import NavigatorBar from './components/Navigator/NavigatorBar';
import AppRoutes from './routes/AppRoutes';
import { useState} from 'react';
import React from 'react';

function App() {
    const [authenticated , setAuthenticated ] = useState<boolean>();
    const [userLogged, setUserLogged] = useState<any>(null);
    const clientId = process.env.REACT_APP_CLIENT_ID;

    const setUser = (user:any)=>{
        setAuthenticated(true);
        setUserLogged(user)
    }

    const setAuth = (auth: boolean)=>{
        setAuthenticated(auth);
    }

    return (
        <div className="App">
            <GoogleOAuthProvider clientId={clientId||""}>
                <NavigatorBar className="NavigatorBar" authenticated={authenticated}/>
                <AppRoutes setUserLogged={setUser} setAuthenticated={setAuth}/>
            </GoogleOAuthProvider>
        </div>
    );
}

export default App;
