// Example on using the nail repo
const assert = require('assert')

if (process.env.NODE_ENV !== 'production') {
  // Load env vars
  require('dotenv').load();
}

// Config
const host = process.env.HOST
const user = process.env.MAIL_USER
const password = process.env.MAIL_PASSWORD

// Mail
const from = process.env.FROM
const to = process.env.TO
const subject = process.env.SUBJECT || 'Hello ✔'
const text = process.env.TEXT || 'Hello world?'
const html = process.env.HTML || '<b>Hello world?</b>'

// Validation
assert(host, 'Required param: host')
assert(user, 'Required param: user')
assert(from, 'Required param: from')
assert(to, 'Required param: to')


if (!user || !password) {
  throw new Error('Error, MAIL_USER and MAIL_PASSWORD are required env vars')
}

const mailRepo = require('../src/repositories/mailRepo')({
  host,
  user,
  password
})

async function testSendMail () {
  const mailVerified = await mailRepo.verify()
  console.log('Verification: ', mailVerified)

  const mailInfo = await mailRepo.sendMail({
    from,
    to,
    subject,
    text,
    html
  })
  console.log('Message sent: %s', mailInfo.messageId);
  console.log('Message receipt: %s', JSON.stringify(mailInfo, null, 2));
}

testSendMail()
  .catch(console.error)
