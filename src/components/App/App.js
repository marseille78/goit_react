import Statistics from "components/Statistics";
import Profile from "../Profile";
import FriendList from "components/FriendList";
import TransactionHistory from "components/TransactionHistory";
import { Block } from "./App.styled";
import dataUser from "data/user.json";
import dataStats from "data/data.json";
import friends from "data/friends.json";
import transactions from "data/transactions.json";

const App = () => {
    return (
        <Block>
            <Profile {...dataUser} />
            <Statistics title="Upload stats" stats={dataStats} />
            <FriendList list={friends} />
            <TransactionHistory list={transactions} />
        </Block>
    );
};

export default App;
