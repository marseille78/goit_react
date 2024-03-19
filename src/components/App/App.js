import Statistics from "components/Statistics";
import Profile from "../Profile";
import { Block } from "./App.styled";
import dataUser from "data/user.json";

const App = () => {
    return (
        <Block>
            <Profile {...dataUser}/>
            <Statistics/>
        </Block>
    );
};

export default App;