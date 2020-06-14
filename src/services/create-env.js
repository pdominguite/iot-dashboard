const fs = require('fs')

fs.writeFileSync(
  './.env',
  `BROKER_USERNAME=${process.env.BROKER_USERNAME}\nBROKER_PASSWORD=${process.env.BROKER_PASSWORD}`,
);
