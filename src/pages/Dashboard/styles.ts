import styled from 'styled-components';

import Arrow from '../../assets/arrow.svg';

export const Container = styled.div`
  max-width: 900px;

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

  border-radius: 10px;

  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    display: border;

    p {
      font-weight: 300;
      text-align: center;
      color: rgba(0, 0, 0, 0.8);
    }
  }

  button {
    color: #242a75;

    height: 200px;
    width: 200px;

    margin: 20px 20px 10px 20px;

    border: 0;
    border-radius: 30px;
    border-color: transparent;

    transition: background-color 0.3s;

    background: rgba(128, 128, 128, 0.15);

    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  }

  #door:active {
    background: rgba(128, 128, 128, 0.15);
    box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.1);
  }

  #door:hover {
    background-color: rgba(93, 191, 212, 0.1);
  }

  .MuiToggleButton-root {
    width: 200px;
    height: 200px;

    padding: 0;
    border: 0;

    color: rgba(0, 0, 0, 0.6);

    background: rgba(128, 128, 128, 0.15);
    transition: background-color 0.3s;
  }

  .MuiToggleButton-root.Mui-selected:hover {
    background-color: rgba(93, 191, 212, 0.2);
  }

  .MuiToggleButton-root:hover {
    background-color: rgba(128, 128, 128, 0.2);
  }

  .MuiToggleButton-root.Mui-selected {
    color: #242a75;
    background-color: rgba(93, 191, 212, 0.1);
  }
`;

export const Slider = styled.div`
  height: 200px;
  width: 200px;

  background: rgba(128, 128, 128, 0.08);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;

  margin: 20px 20px 10px 20px;
  padding: 20px;

  border-color: transparent;

  .slider {
    -webkit-appearance: none;
    -webkit-transition: 0.2s;

    width: 100%;
    height: 60px;

    background: rgba(128, 128, 128, 0.15);

    outline: none;

    opacity: 1;
    transition: opacity 0.2s;

    border-radius: 5px;
  }

  .slider:hover {
    opacity: 0.85;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;

    width: 40px;
    height: 60px;

    background: url(${Arrow}) no-repeat;
    background-color: #242a75;
    background-position: center;

    border-radius: 5px;

    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 40px;
    height: 60px;

    background: url(${Arrow}) no-repeat;
    background-color: #242a75;
    background-position: center;

    border-radius: 5px;
    border-color: transparent;

    cursor: pointer;
  }

  input[type='range'] {
    transform: rotateZ(90deg);
  }
`;

export const Info = styled.div`
  margin: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  #icon {
    height: 80px;
    width: 50px;

    color: #fff;

    background: #242a75;

    border-radius: 10px 0 0 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  #data {
    height: 80px;
    width: 100px;
    padding-left: 15px;

    background: #fff;

    border-radius: 0 10px 10px 0;

    display: flex;
    align-items: center;

    strong {
      font-size: 25px;
    }

    p {
      font-size: 12px;
      color: #a8a8b3;
    }
  }
`;

export const Text = styled.p`
  height: 100px;
  width: 250px;

  margin: 10px;
  margin-top: 20px;

  background: #fff;

  border-radius: 8px;

  font-size: 20px;
  text-align: center;

  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
