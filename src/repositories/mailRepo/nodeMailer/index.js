const assert = require('assert')

const nodemailer = require('nodemailer')
module.exports = ({
  user,
  password,
  host,
  port = 587,
  secure = false,
  requireTLS = true
}) => {
  assert(user, 'Required param')
  assert(password, 'Required param')
  assert(host, 'Required param')

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS,
    auth: {
      user: user,
      pass: password
    }
  })

  return {
    sendMail: require('./sendMail')({ transporter }),
    verify: require('./verify')({ transporter })
  }
}