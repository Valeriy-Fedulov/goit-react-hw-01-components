import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {
                friends.map(friend => (
                    <li className="item" key={friend.id}>
                    <FriendListItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                    />
                    </li>
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
            }
        ))
}