const crypto = require('crypto');

const getSecretKey = () => {
  const secret = crypto.randomBytes(32).toString('hex');
  return secret;
};

module.exports = getSecretKey;
