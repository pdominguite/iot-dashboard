import React, { useState, useCallback, useEffect } from 'react';
import { FiWind } from 'react-icons/fi';
import { FaThermometerHalf } from 'react-icons/fa';
import { RiDoorLockBoxLine } from 'react-icons/ri';
import { IoIosWater } from 'react-icons/io';
import { GoLightBulb } from 'react-icons/go';
import { ToggleButton } from '@material-ui/lab';
import { Panel, Control, Container, Info, Slider } from './styles';
import ThalesLogo from '../../assets/logo.png';

import api from '../../services/api';
import mqttClient from '../../services/mqttClient';

const Dashboard: React.FC = () => {
  const [lightStatus, setLightStatus] = useState(false);
  const [windowValue, setWindowValue] = useState(10);
  const [temperature, setTemperature] = useState(10);
  const [humidity, setHumidity] = useState(10);
  const [air, setAir] = useState('Bom');
  const windowSlider = document.getElementById(
    'windowSlider',
  ) as HTMLInputElement;

  mqttClient.on('message', (topic, message) => {
    switch (topic) {
      case '/temperature':
        setTemperature(Number(Number(message).toFixed(1)));
        break;
      case '/humidity':
        setHumidity(parseInt(message.toString(), 10));
        break;
      case '/air':
        if (Number(message) < 0.33) setAir('Ruim');
        else if (Number(message) > 0.66) setAir('Ruim');
        else setAir('Boa');
        break;
      case '/light':
        setLightStatus(message.toString() === '1');
        break;
      case '/window':
        setWindowValue(parseInt(message.toString(), 10));
        break;
      default:
        break;
    }
  });

  const clickHandler = useCallback(async () => {
    setLightStatus(!lightStatus);
    mqttClient.publish('/light', `${Number(!lightStatus)}`);
  }, [lightStatus]);

  const dragHandler = useCallback(async (e) => {
    const windowLevel = e.target.value;
    mqttClient.publish('/window', `${Number(windowLevel)}`);
  }, []);

  useEffect(() => {
    api.get('/temperature').then((response) => {
      if (response.data)
        setTemperature(Number(Number(response.data).toFixed(1)));
      else setTemperature(0);
    });
    api.get('/humidity').then((response) => {
      if (response.data) setHumidity(parseInt(response.data, 10));
      else setHumidity(0);
    });
    api.get('/air').then((response) => {
      if (response.data) setAir('Bom');
      else setAir('-');
    });
    api.get('/light').then((response) => {
      if (response.data) setLightStatus(!!response.data);
      else setLightStatus(false);
    });
    api.get('/window').then((response) => {
      if (response.data) setWindowValue(parseInt(response.data, 10));
      if (windowSlider) {
        windowSlider.value = windowValue.toString();
      }
    });
  }, [windowSlider, windowValue]);

  return (
    <Container>
      <div id="logo">
        <img src={ThalesLogo} alt="Thales" />
      </div>
      <Panel>
        <Control>
          <Info>
            <div id="icon">
              <FaThermometerHalf size={30} />
            </div>
            <div id="data">
              <div id="info">
                <strong>
{' '}
{temperature}°</strong>
                <p>Temperatura</p>
              </div>
            </div>
          </Info>
          <Info>
            <div id="icon">
              <IoIosWater size={30} />
            </div>
            <div id="data">
              <div id="info">
                <strong>
{' '}
{humidity}%</strong>
                <p>Umidade</p>
              </div>
            </div>
          </Info>
          <Info>
            <div id="icon">
              <FiWind size={30} />
            </div>
            <div id="data">
              <div id="info">
                <strong>{air}</strong>
                <p>CO2</p>
              </div>
            </div>
          </Info>
        </Control>

        <Control>
          <button type="submit" id="door">
            <RiDoorLockBoxLine size={50} />
          </button>
          <div>
            <ToggleButton
              value="check"
              disableRipple
              selected={lightStatus}
              onChange={clickHandler}
            >
              <GoLightBulb size={50} />
            </ToggleButton>
          </div>
          <Slider>
            <input
              id="windowSlider"
              type="range"
              min="0"
              max="100"
              step="10"
              className="slider"
              defaultValue={windowValue}
              onMouseUp={dragHandler}
            />
          </Slider>
        </Control>
      </Panel>
    </Container>
  );
};

export default Dashboard;
