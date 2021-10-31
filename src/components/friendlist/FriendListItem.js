import PropTypes from 'prop-types';

export default function FriendListItem(props) {
    const { avatar, name, isOnline } = props;
    return (
        <>
            <span className="status">{ isOnline }</span>
            <img className="avatar" src={ avatar } alt={ name } width="48" />
            <p className="name">{ name }</p>
        </>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}