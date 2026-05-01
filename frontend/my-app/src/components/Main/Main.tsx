import { observer } from 'mobx-react-lite';
import Welcome from '../Welcome/Welcome';

const Main = () => {

    return (
        <div>
            <Welcome/>
        </div>
    )
}

export default observer(Main)