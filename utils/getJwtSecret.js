const crypto = require('crypto')

const getSecretKey = () => {
  const secret = crypto.randomBytes(32).toString('hex')
  console.log(secret)
  return secret
}

module.exports = getSecretKey
