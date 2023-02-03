




import { Routes, Route } from 'react-router-dom';
import Profile from '../Pages/PagesPrivates/Profile/Profile';
import LogoutPage from '../Pages/PagesPrivates/Logout/Logout';
import MainPage from '../Pages/PagesPrivates/MainPage/MainPage';

import React from 'react';

import HomePage from '../Pages/HomePage/Homepage';
import LoginPage from '../Pages/PagesPublics/Login/Login';
import RegisterPage from '../Pages/PagesPublics/Login/Register/Register';
import Books from '../Pages/PagesPrivates/Books/Books';

const AppRoutes = (props: any) => {

    function handleChangeUserLogged(user:any){
        props.setUserLogged(user);
    }

    function handlesetAuthenticated(auth:boolean){
        props.setAuthenticated(auth);
    }

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage setUserLogged={handleChangeUserLogged} setAuthenticated={handlesetAuthenticated}/>} />
            <Route path='/register' element={<RegisterPage />} />

            <Route path='/app' element={<MainPage />} />
            <Route path='/app/profile' element={<Profile />} />
            <Route path='/app/logout' element={<LogoutPage  setAuthenticated={handlesetAuthenticated}/>} />
            <Route path='/app/books' element={<Books setNotificationsModal={props.setNotificationsModal}/>} />

        </Routes>
    );
}

export default AppRoutes;