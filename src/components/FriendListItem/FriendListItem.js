import { Avatar, Item, Name } from "./FriendListItem.styled";

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <Item className={isOnline ? "online" : null}>
            <Avatar src={avatar} alt={name} />
            <Name>{name}</Name>
        </Item>
    );
};

export default FriendListItem;