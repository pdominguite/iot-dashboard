import mqtt from 'mqtt';

const mqttClient = mqtt.connect(
  'mqtt://09f3b188:879abfcbf91337ee@broker.shiftr.io',
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
