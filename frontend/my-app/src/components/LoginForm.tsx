import React, {FC, useContext, useState} from "react";
import { Context } from "../index";
import {observer} from "mobx-react-lite";

const LoginForm: FC = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>('')
    const [role, setRole] = useState<string>('')
    const {store} = useContext(Context)
    
    return(
        <div>
            <input 
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email" 
            
            />
            <input 
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="text"
            placeholder="Password" 
            
            />
            <select
            onChange={e => setRole(e.target.value)}
            value={role}
            aria-placeholder='Выберите роль'
            >
                <option value=''>Выберите роль</option>
                <option value='guest'>Гость</option>
                <option value='user'>Пользователь</option>
            </select>
            <button onClick={() => store.login(email, password)}>Логин</button>
            <button onClick={() => store.registration(email, password, role)}>Регистрация</button>
        </div>
    )
}

export default observer(LoginForm)