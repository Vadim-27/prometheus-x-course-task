import { useEffect, useState } from 'react';
import TextField from 'shared/components/TextField/TextField';
import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import fields from './fields';

import css from './SingInForm.module.scss';

const SingInForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { userName } = state;
  const [userNameError, setUserNameError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isFocused && (userName.length < 4 || userName.length > 16)) {
      timeoutId = setTimeout(() => {
        setUserNameError('Username must be between 4 and 16 characters');
      }, 3000);
    } else {
      setUserNameError('');
    }

    return () => clearTimeout(timeoutId);
  }, [userName, isFocused]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <form className={css.form} onSubmit={e => handleSubmit(e, onSubmit)}>
      <TextField
        value={userName}
        handleChange={handleChange}
        {...fields.userName}
        onFocus={handleFocus}
      />
      {userNameError && <p className={css.error}>{userNameError}</p>}
      <button
        className={`${css.btn} ${userNameError && css.btnDisabled}`}
        type="submit"
      >
        Sign-In
      </button>
    </form>
  );
};
export default SingInForm;
