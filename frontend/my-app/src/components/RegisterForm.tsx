import React, {FC, useContext, useState} from "react";
import { Context } from "../index";
import {observer} from "mobx-react-lite";

const RegisterForm = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [role, setRole] = useState<string>('')
    const {store} = useContext(Context)

    return(
        <>
        <input 
        onChange={e => setUsername(e.target.value)}
        value={username}
        type="text"
        placeholder="username" 
        />

        <input 
        onChange={e => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="email" 
        />

        <input 
        onChange={e => setPassword(e.target.value)}
        value={password}
        type="text"
        placeholder="password" 
        />

        <select
        onChange={e => setRole(e.target.value)}
        value={role}
        >
            <option value="">Выберите роль</option>
            <option value="user">Пользователь</option>
            <option value="guest">Гость</option>
        </select>
        </>
    )
}

export default observer(RegisterForm)