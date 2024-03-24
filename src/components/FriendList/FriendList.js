import PropTypes from "prop-types";
import { Block, List } from "./FriendList.styled";
import FriendListItem from "components/FriendListItem";

const FriendList = ({ list = [] }) => {
    return (
        <Block data-cmp="FriendList">
            <List>
                {list.map(({ avatar, name, isOnline, id }) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                ))}
            </List>
        </Block>
    );
};

FriendList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool,
            id: PropTypes.number.isRequired,
        })
    ),
};

export default FriendList;
