import { observer } from "mobx-react-lite";
import AuthPage from './pages/Auth/AuthPage';


function App() {

    return (
        <>
        <AuthPage/>
        </>
    );
}

export default observer(App);