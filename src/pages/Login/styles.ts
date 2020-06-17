import styled from 'styled-components';

import ALogo from '../../assets/a-logo.png';

export const Container = styled.div`
  height: 100%;
  max-width: 900px;

  width: 760px;

  #logo {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 500px;
      margin-bottom: 30px;
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 25px;

  font-size: 38px;
  line-height: 56px;

  color: rgba(128, 128, 128, 0.2);
`;

export const Panel = styled.div`
  padding: 20px;

  height: 400px;

  border-radius: 10px;

  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;

  background: no-repeat -90% 280%;
  background-size: 500px;
  background-image: url(${ALogo});

  form {
    width: 280px;

    input {
      color: rgba(0, 0, 0, 0.8);

      display: block;
      height: 50px;
      width: 100%;
      padding: 0 20px;

      border: 0;
      border-radius: 5px;
    }
    input + input {
      margin-top: 20px;
    }

    input::placeholder {
      color: rgba(128, 128, 128, 0.5);
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
    margin-left: auto;
    padding: 10px;

    width: 120px;

    font-size: 18px;
    font-weight: 300;

    border: 0;

    color: #fff;
    background: #242a75;

    border-radius: 5px;

    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(36, 42, 117, 0.9);
    }

    svg {
      margin-left: 10px;
    }
  }
`;
