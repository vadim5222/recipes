import RegisterForm from "../components/RegisterForm"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import LoginPage from "./LoginPage"

const RegisterPage = () => {
    return(
        <>
        <RegisterForm/>
        <p>Уже есть аккаунт? <Link to='/login'>Войти</Link></p>
        </>
    )
}

export default RegisterPage