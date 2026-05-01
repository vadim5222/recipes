import React, { FC, useContext} from 'react';
import { Context } from "../../index";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { observer } from 'mobx-react-lite';
import Main from '../../components/Main/Main'
import RegisterPage from '../RegisterPage';
import LoginPage from '../LoginPage';

const MainPage = () => {
    const { store } = useContext(Context)
        const authRouter = (
        <>
            <Route path='/' element={<Navigate to='/login' />}></Route>
            <Route path='/register' element={<RegisterPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='*' element={<Navigate to='/' />}></Route>
        </>
    )

    const appRouter = (
        <>
            <Route path='/' element={<Main />}></Route>
            <Route path='*' element={<Navigate to="/" />} />
        </>
    )

    return (
        <>
            <Router>
                <Routes>
                    {store.isAuth ? appRouter : authRouter}
                </Routes>
            </Router>
        </>
    )
}

export default observer(MainPage)