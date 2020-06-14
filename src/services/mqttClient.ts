import mqtt from 'mqtt';

const username = process.env.BROKER_USERNAME || '';
const password = process.env.BROKER_PASSWORD || '';

const mqttClient = mqtt.connect(
  `wss://${username}:${password}@broker.shiftr.io`,
  { clientId: 'dashboard' },
);

mqttClient.on('connect', () => {
  mqttClient.subscribe('/temperature');
  mqttClient.subscribe('/humidity');
  mqttClient.subscribe('/window');
  mqttClient.subscribe('/light');
  mqttClient.subscribe('/air');
});

export default mqttClient;
