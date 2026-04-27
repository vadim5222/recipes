import LoginForm from "../components/LoginForm"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import RegisterPage from "./RegisterPage"



const LoginPage = () => {
    return(
        <>
        <LoginForm/>
        <p>Нету аккаунта? <Link to='/register'>Зарегистрироваться</Link></p>

        </>
    )
}

export default LoginPage