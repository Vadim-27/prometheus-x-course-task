import TextField from "shared/components/TextField/TextField";
import useForm from "shared/hooks/useForm";
import initialState from "./initialState";
import fields from "./fields";

import css from './SingInForm.module.scss';

const SingInForm = ({onSubmit}) => {
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
  const { userName } = state;

  const isUserNameValid = userName.length >= 4 && userName.length <= 16;

  return (
    <form className={css.form} onSubmit={e => handleSubmit(e, onSubmit)}>
      <TextField
        value={userName}
        handleChange={handleChange}
        {...fields.userName}
      />
      <button
        className={`${css.btn} ${!isUserNameValid && css.btnDisabled}`}
        type="submit"
      >
        Sign-In
      </button>
    </form>
  );
}
export default SingInForm;
