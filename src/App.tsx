import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import NavigatorBar from './components/Navigator/NavigatorBar';
import AppRoutes from './routes/AppRoutes';
import { useEffect, useState } from 'react';
import React from 'react';
import MessageModalType from './@Types/MessageModalType';
import NotificationsModal from './components/Notifications/NotificationsModal';

function App() {
    const [authenticated, setAuthenticated] = useState<boolean>();
    const [userLogged, setUserLogged] = useState<any>(null);
    const [messageModal, setNotificationsModal] = useState<MessageModalType>()

    const clientId = process.env.REACT_APP_CLIENT_ID;

    useEffect(() => {
        console.log('authenticated:', authenticated)
    }, [])

    const setUser = (user: any) => {
        setAuthenticated(true);
        setUserLogged(user)
    }

    const setAuth = (auth: boolean) => {
        setAuthenticated(auth);
    }

    const hideMessageHandler = () => {
        setNotificationsModal({
            showModal: false,
            textMessage: "",
            typeMessage: undefined,
        })
    }

    const setNotificationsModalHandler = (messageModal: any) => {
        setNotificationsModal(messageModal)
    }

    const renderNotificationsModal = () => {
        if(!messageModal) return;

        return messageModal.showModal && <NotificationsModal
            textMessage={messageModal.textMessage} 
            typeMessage={messageModal.typeMessage}
            hideMessage={hideMessageHandler}
        />
    }
    return (
        <div className="App">
            {renderNotificationsModal()}
            <GoogleOAuthProvider clientId={clientId || ""}>
                <NavigatorBar className="NavigatorBar" authenticated={authenticated} />
                <AppRoutes setUserLogged={setUser} setAuthenticated={setAuth} setNotificationsModal={setNotificationsModalHandler} />
            </GoogleOAuthProvider>
        </div>
    );
}

export default App;
