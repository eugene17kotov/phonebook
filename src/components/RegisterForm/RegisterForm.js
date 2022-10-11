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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(authOperations.register(formData));

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Имя
          <input type="text" name="name" />
        </label>

        <label style={styles.label}>
          Почта
          <input type="email" name="email" />
        </label>

        <label style={styles.label}>
          Пароль
          <input type="password" name="password" />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
};
