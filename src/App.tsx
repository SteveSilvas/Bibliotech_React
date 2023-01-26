import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import NavigatorBar from './components/Navigator/NavigatorBar';
import AppRoutes from './routes/AppRoutes';
function App() {

    return (
        <div className="App">
            <GoogleOAuthProvider clientId="1067237110415-p9nh85vqal3jdcri8md492mutd4dh5im.apps.googleusercontent.com">
                <NavigatorBar className="NavigatorBar"/>
                <AppRoutes/>
            </GoogleOAuthProvider>
        </div>
    );
}

export default App;
