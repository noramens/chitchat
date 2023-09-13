import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/authContext';
import LoginForm from './LoginForm';
import { API_ROOT, CHAT_ENGINE_KEY } from '../helpers/constants';
import { isValidFormData } from '../helpers/utils';
import { Background } from '../styles/Styles';

export default function Auth() {
  const navigate = useNavigate();

  const { username, secret } = useContext(AuthContext);

  const [error, setError] = useState('');

  const mutation = useMutation(
    async () => {
      const response = await axios.put(
        `${API_ROOT}/users/`,
        { username, secret },
        { headers: { 'Private-key': CHAT_ENGINE_KEY } }
      );
      return response.data;
    },
    {
      onError: () => {
        setError('Authentication failed. Please check your credentials.');
      },
      onSuccess: () => {
        navigate('/chats');
      }
    }
  );

  const handleFormSubmit = e => {
    e.preventDefault();
    setError('');

    if (isValidFormData({ username, secret })) {
      mutation.mutate();
    } else {
      setError('Please enter both email and password.');
    }
  };

  return (
    <Background>
      <LoginForm
        onFormSubmit={handleFormSubmit}
        isLoading={mutation?.isLoading}
        error={error}
      />
    </Background>
  );
}
