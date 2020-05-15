import React from 'react';
import { FiWind } from 'react-icons/fi';
import { FaThermometerHalf } from 'react-icons/fa';
import { RiDoorLockBoxLine } from 'react-icons/ri';
import { IoIosWater } from 'react-icons/io';
import { GoLightBulb } from 'react-icons/go';
import { ToggleButton } from '@material-ui/lab';
import { Panel, Control, Container, Info, Slider } from './styles';
import ThalesLogo from '../../assets/logo.png';

const Dashboard: React.FC = () => {
  const [selected, setSelected] = React.useState(false);
  return (
    <Container>
      <div id="logo">
        <img src={ThalesLogo} alt="Thales logo" />
      </div>
      <Panel>
        <Control>
          <Info>
            <div id="icon">
              <FaThermometerHalf size={30} />
            </div>
            <div id="data">
              <div id="info">
                <strong>38,5°</strong>
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
                <strong>50%</strong>
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
                <strong>Bom</strong>
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
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              <GoLightBulb size={50} />
            </ToggleButton>
          </div>
          <Slider>
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              className="slider"
              defaultValue="20"
            />
          </Slider>
        </Control>
      </Panel>
    </Container>
  );
};

export default Dashboard;
