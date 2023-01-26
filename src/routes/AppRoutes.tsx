
import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage/Homepage';
import LoginPage from '../Pages/Login/Login';
import RegisterPage from '../Pages/Register/Register';

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
        </Routes>
    );
}

export default AppRoutes;