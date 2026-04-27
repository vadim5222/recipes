import React, { FC, useContext, useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import { IUser } from "./models/IUser";
import UserService from "./services/UserService";
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Routes, Route, Link , Navigate} from "react-router-dom"
import LoginPage from './pages/LoginPage';
function App() {
    const { store } = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers()
            setUsers(response.data)
        } catch (e: any) {
            console.log(e)
        }
    }

    if (store.isLoading) {
        return <div>Загрузка...</div>
    }

    return (
        <Router>
            <Routes>

                {!store.isAuth && (
                    <>
                        <Route path='/' element={<Navigate to='/login'/>}></Route>
                        <Route path='/register' element={<RegisterPage />}></Route>
                        <Route path='/login' element={<LoginPage />}></Route>
                        <Route path='*' element={<Navigate to='/'/>}></Route>
                    </>
                )}

                {store.isAuth && (
                    <>
                        <Route path='/' element={
                            <div>
                                <h1>{store.isAuth ? `Пользователь авторизован - ${store.user.username}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
                                <h1>{store.user.isActivated ? 'Аккаунт подтвержден' : 'Подтвердите аккаунт'}</h1>
                                <button onClick={() => store.logout()}>Выйти</button>
                                <div>
                                    <button onClick={getUsers}>Получить список пользователей</button>
                                    {users.map(user =>
                                        <div key={user.email}>{user.email}</div>)}
                                </div>
                            </div>
                        }>
                        </Route>
                        <Route path='*' element={<Navigate to="/"/>}/>
                    </>
                )}

            </Routes>
        </Router>

    );
}

export default observer(App);