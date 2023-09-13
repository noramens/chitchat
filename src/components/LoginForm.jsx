import { useContext } from 'react';
import PropTypes from 'prop-types';

import { AuthContext } from '../context/authContext';
import {
  AuthForm,
  AuthSubtitle,
  AuthTitle,
  Input,
  SubmitButton,
  Error
} from '../styles/Styles';

function LoginForm({ onFormSubmit, isLoading, error }) {
  const { setUsername, setSecret } = useContext(AuthContext);

  return (
    <AuthForm onSubmit={onFormSubmit}>
      <AuthTitle>ChitChat </AuthTitle>
      <AuthSubtitle>
        Select your username and password to get started
      </AuthSubtitle>
      <div>
        {error && <Error>{error}</Error>}
        <Input
          type="text"
          placeholder="name"
          onChange={e => setUsername(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          onChange={e => setSecret(e.target.value)}
        />
      </div>
      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login / Sign up'}
      </SubmitButton>
    </AuthForm>
  );
}

LoginForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string
};

export default LoginForm;
