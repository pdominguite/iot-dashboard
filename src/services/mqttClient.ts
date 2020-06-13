import mqtt from 'mqtt';

const username = '09f3b188';
const password = '879abfcbf91337ee';

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
