import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(authOperations.login(formData));

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input type="email" name="email" />
        </label>

        <label style={styles.label}>
          Пароль
          <input type="password" name="password" />
        </label>

        <button type="submit">Войти</button>
      </form>
    </>
  );
};
