import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    75deg,
    rgb(40, 43, 54) 0%,
    rgb(40, 43, 54) 50%,
    rgba(40, 43, 54, 0.8) 100%
  );
  display: table-cell;
  vertical-align: middle;
`;

export const AuthContainer = styled.main`
  width: 50%;
  max-width: 350px;
  padding: 0% 25% 0% 25%;
`;

export const AuthForm = styled.form`
  width: 50%;
  max-width: 350px;
  padding: 0% 25% 0% 25%;
`;

export const AuthTitle = styled.h1`
  font-size: 42px;
  font-family: 'Avenir';
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #e8e8e8;
  padding-bottom: 12px;
`;

export const AuthSubtitle = styled.p`
  font-size: 18px;
  font-family: 'Avenir';
  letter-spacing: 0.5px;
  color: #afafaf;
  padding-bottom: 24px;
`;

export const Error = styled.p`
  color: #ff4000;
`;

export const Input = styled.input`
  background-color: #3e404b;
  color: white;
  font-family: 'Avenir';
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 24px 18px 12px 18px;
  width: calc(100% - 18px - 18px);
  margin-bottom: 12px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 53px;
  color: white;
  background-color: #fa541c;
  border: none;
  outline: none;
  border-radius: 8px;
  font-family: 'Avenir';
  cursor: pointer;
  transition: all 0.44s ease;
  -webkit-transition: all 0.44s ease;
  -moz-transition: all 0.44s ease;
  &:hover{
    filter: brightness(145%
  }
`;
