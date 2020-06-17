import React, { useState, useCallback, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { FiWind, FiChevronLeft } from 'react-icons/fi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaThermometerHalf } from 'react-icons/fa';
import { RiDoorLockBoxLine } from 'react-icons/ri';
import { IoIosWater } from 'react-icons/io';
import { GoLightBulb } from 'react-icons/go';
import { ToggleButton } from '@material-ui/lab';
import { Panel, Control, Container, Info, Slider, Header } from './styles';
import ThalesLogo from '../../assets/logo.png';

import api from '../../services/api';
import mqttClient from '../../services/mqttClient';

const DETAILED_DASHBOARD = process.env.REACT_APP_DETAILED_DASHBOARD
  ? process.env.REACT_APP_DETAILED_DASHBOARD
  : '';

const pageTarget = process.env.REACT_APP_DETAILED_DASHBOARD ? '_blank' : '';

const Dashboard: React.FC = () => {
  const [lightStatus, setLightStatus] = useState(false);
  const [windowValue, setWindowValue] = useState(10);
  const [temperature, setTemperature] = useState(10);
  const [humidity, setHumidity] = useState(10);
  const [air, setAir] = useState('Bom');

  const windowSlider = document.getElementById(
    'windowSlider',
  ) as HTMLInputElement;

  const clickHandler = useCallback(async () => {
    setLightStatus(!lightStatus);
    mqttClient.publish('/light', `${Number(!lightStatus)}`);
  }, [lightStatus]);

  const dragHandler = useCallback(async (e) => {
    const windowLevel = e.target.value;
    mqttClient.publish('/window', `${Number(windowLevel)}`);
  }, []);

  const openDoorHandler = useCallback(async (e) => {
    mqttClient.publish('/door', '1');
  }, []);

  useEffect(() => {
    const handleNewMessage = (topic: string, message: Buffer): void => {
      const value = message.toString();
      switch (topic) {
        case '/temperature':
          setTemperature(Number(Number(value).toFixed(1)));
          break;
        case '/humidity':
          setHumidity(parseInt(value, 10));
          break;
        case '/air':
          if (Number(value) < 0.33) setAir('Ruim');
          else if (Number(value) > 0.66) setAir('Ruim');
          else setAir('Bom');
          break;
        case '/light':
          setLightStatus(value === '1');
          break;
        case '/window':
          setWindowValue(parseInt(value, 10));
          if (windowSlider) windowSlider.value = value;
          break;
        default:
          break;
      }
    };
    mqttClient.on('message', handleNewMessage);

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
      if (windowSlider) windowSlider.value = windowValue.toString();
    });
  }, [windowValue, windowSlider]);

  return (
    <>
      <Container>
        <Header>
          <Link to="/">
            <FiChevronLeft size={20} />
            Sair
          </Link>
        </Header>
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
                  <strong> {temperature}°</strong>
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
                  <strong> {humidity}%</strong>
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
            <section>
              <button type="submit" id="door" onClick={openDoorHandler}>
                <RiDoorLockBoxLine size={50} />
              </button>
              <p>Fechadura</p>
            </section>

            <section>
              <ToggleButton
                value="check"
                disableRipple
                selected={lightStatus}
                onChange={clickHandler}
              >
                <GoLightBulb size={50} />
              </ToggleButton>
              <p>Luzes</p>
            </section>
            <section>
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
              <p>Cortinas</p>
            </section>
          </Control>
        </Panel>
        <form action={DETAILED_DASHBOARD} target={pageTarget}>
          <button type="submit">
            <AiOutlineDashboard size={30} />
            Análises
          </button>
        </form>
      </Container>
    </>
  );
};

export default Dashboard;
