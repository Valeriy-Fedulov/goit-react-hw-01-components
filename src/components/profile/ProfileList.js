import Profile from './Profile';
import PropTypes from 'prop-types';

export default function ProfileList({ itemsUser }) {
    return (
        <ul>
            {itemsUser.map(user => (
                <li key={user.tag}>
                    <Profile
                        name={user.name}
                        tag={user.tag}
                        location={user.location}
                        avatar={user.avatar}
                        stats={user.stats}
                    />
                </li>
            ))}
        </ul>
    );
}

ProfileList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            tag: PropTypes.string.isRequired,
        }),
    ),
};