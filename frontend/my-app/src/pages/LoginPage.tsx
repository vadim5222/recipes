import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return(
        <>
        <LoginForm/>
        <p>Нету аккаунта? <Link to='/register'>Зарегистрироваться</Link></p>
        </>
    )
} 

export default LoginPage