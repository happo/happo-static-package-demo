require('dotenv').config();

const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  generateStaticPackage: () => ({ path: './static' }),
};
