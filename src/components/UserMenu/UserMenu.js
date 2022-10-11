import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
// import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUsername);
  //   const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logout())}>
        Выйти
      </button>
    </div>
  );
};

export default UserMenu;
