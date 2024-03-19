import PropTypes from "prop-types";
import {
    Avatar,
    Block,
    Description,
    Stats,
    StatsLabel,
    StatsQuantity,
    Userdesc,
    Username,
} from "./Profile.styled";

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Block data-cmp="Profile">
            <Description>
                <Avatar src={avatar} alt={username} />
                <Username>{username}</Username>
                <Userdesc>@{tag}</Userdesc>
                <Userdesc>{location}</Userdesc>
            </Description>

            <Stats>
                <li>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{stats.followers}</StatsQuantity>
                </li>
                <li>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{stats.views}</StatsQuantity>
                </li>
                <li>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{stats.likes}</StatsQuantity>
                </li>
            </Stats>
        </Block>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};

export default Profile;
