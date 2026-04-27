import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
    return(
        <>
        <RegisterForm/>
        <p>Уже есть аккаунт? <Link to='/login'>Войти</Link></p>
        </>
    )
} 

export default RegisterPage