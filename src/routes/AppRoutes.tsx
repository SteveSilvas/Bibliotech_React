




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


    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage setIsLoggedIn={props.setIsLoggedIn} />} />
            <Route path='/register' element={<RegisterPage />} />

            <Route path='/app' element={<MainPage />} />
            <Route path='/app/profile' element={<Profile />} />
            <Route path='/app/logout' element={<LogoutPage />} />
            <Route path='/app/books' element={<Books />} />

        </Routes>
    );
}

export default AppRoutes;