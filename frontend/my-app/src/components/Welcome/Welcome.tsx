import React, { FC, useContext, useEffect, useState } from 'react';
import { Context } from "../../index";
import { IUser } from "../../models/IUser";
import UserService from "../../services/UserService";
import { observer } from 'mobx-react-lite';


const Welcome = () => {

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
        <div>
            <div>
                <h1>Добро пожаловать {store.user.username}</h1>
                <h1>{store.user.isActivated ? 'Аккаунт подтвержден' : 'Подтвердите аккаунт'}</h1>
                <button onClick={() => store.logout()}>Выйти</button>
                <div>
                    <button onClick={getUsers}>Получить список пользователей</button>
                    {users.map(user =>
                        <div key={user.id}>{user.username}</div>)}
                </div>
            </div>
        </div>
    )
}

export default observer(Welcome)