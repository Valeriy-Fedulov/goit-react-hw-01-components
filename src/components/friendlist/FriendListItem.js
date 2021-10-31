import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem(props) {
    const { avatar, name, isOnline } = props;
    return (
        <>
            {isOnline ? <span className={s.statusOnline}></span> : <span className={s.statusOffline}></span>}
            <img className={s.avatar} src={ avatar } alt={ name } width="48" />
            <p className={s.name}>{ name }</p>
        </>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}