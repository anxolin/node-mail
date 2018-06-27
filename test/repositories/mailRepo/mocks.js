const ERROR_MOCK = new Error('Intentional error for sendMail mock')
const MAIL_SUCCESS_MOCK = {
  "accepted": [
    "foo@example.com"
  ],
  "rejected": [],
  "envelopeTime": 144,
  "messageTime": 147,
  "messageSize": 569,
  "response": "250 2.0.0 Ok: queued as F1CF81F34D",
  "envelope": {
    "from": "baz@example.com",
    "to": [
      "foo@example.com"
    ]
  },
  "messageId": "<4fa0f253-bf5d-a57a-97e2-353294925fa3@example.com>"
}

const VALIDATE_SUCCESS = true
const MAIL_ERROR_MOCK = new Error('Intentional error for sendMail mock')

const sendMailFactory = require('../../../src/repositories/mailRepo/nodeMailer/sendMail')
const verifyFactory = require('../../../src/repositories/mailRepo/nodeMailer/verify')

function getSendMail (success = true) {
  const sendMail = (params, callback) => {
    if (success) {
      callback(null, MAIL_SUCCESS_MOCK)
    } else {
      callback(MAIL_ERROR_MOCK, null)
    }
  }

  const transporter = {
    sendMail
  }
  return jest.fn(sendMailFactory({ transporter }))
}

function getVerify (success = true) {
  const verify = callback => {
    if (success) {
      callback(null, VALIDATE_SUCCESS)
    } else {
      callback(MAIL_ERROR_MOCK, null)
    }
  }

  const transporter = {
    verify
  }
  return jest.fn(verifyFactory({ transporter }))
}

module.exports = {
  ERROR_MOCK,
  MAIL_SUCCESS_MOCK,
  VALIDATE_SUCCESS,
  
  getSendMail,
  getVerify
}