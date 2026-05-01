import { observer } from "mobx-react-lite";
import MainPage from './pages/Main/MainPage';


function App() {

    return (
        <>
            <MainPage />
        </>
    );
}

export default observer(App);