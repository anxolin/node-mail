# node-mail
Basic mail sender

Implement a repository for easily sending mails. 
It uses `nodemailer` and all methods return promises.

# Usage
First install dependencies:
```bash
yarn add anxolin/node-mail --save # npm install anxolin/mail --save
```

Then, use it:
```js
const nodeMail = require('node-mail')({
  user: 'your-user',
  password: 'your-password',
  host: 'your-password'
})

// Verify the connection
nodeMail
  .verify()
  .then(success => console.log('Mail connection result: %s', success))
  .catch(console.error)

nodeMail
  .sendMail({
    from: 'foo@example.com',
    to: 'baz@example.com',
    subject: 'Hi there ✔',
    text: 'How are you doing?',
    html: 'How are <b>you</b> doing?'
  })
  .then(mailInfo => console.log('Mail sent: %s', mailInfo.messageId))
  .catch(console.error)
```

# Config
```js
const nodeMail = require('node-mail')(config)
```

Where `config` may contain:

| Parameter | Required | Description  |
| ----------|:--------:| -----:|
| user | Yes | User for the mail authentication |
| password | Yes | Password for the mail authentication |
| host | Yes | Mail server host |
| port | No. Default `587` | Port |
| secure | No. Default `false` | Secure |
| requireTLS | No. Dedault `true` | Require TLS |

# Send a test mail
To test, execute:
```bash
yarn install

# Execute
MAIL_USER=foo@example.com \
MAIL_PASSWORD=your-pass-here \
HOST=mail.example.com \
FROM=foo@example.com \
TO=baz@example.com \
SUBJECT="Hi there ✔" \
TEXT="How are you doing?" \
HTML="How are <b>you</b> doing?" \
yarn send-mail
```

## Create a .env file
A simpler approach to execute the mail sender is to create a `.env` file:

```ini
MAIL_USER=foo@example.com
MAIL_PASSWORD=your-pass-here
HOST=mail.example.com
FROM=foo@example.com
TO=baz@example.com
SUBJECT="Hi there ✔"
TEXT="How are you doing?"
HTML="How are <b>you</b> doing?"
```

```bash
yarn send-mail
```

# Execute the tests
```bash
yarn test
```
