const {
  MAIL_SUCCESS_MOCK,
  ERROR_MOCK,
  getSendMail
} = require('./mocks')

test('success is handled', async () => {
  // GIVEN:
  const sendMail = getSendMail()

  // WHEN we send a successful mail
  const result = await sendMail()

  // THEN we get a success result
  expect(result).toBe(MAIL_SUCCESS_MOCK)
})

test('error is handled', async () => {
  // GIVEN:
  const sendMail = getSendMail(success = false)

  // WHEN we send a erroneous mail
  expect.assertions(1)
  return sendMail().catch(error => {
    // THEN we get an exception
    expect(error).toEqual(ERROR_MOCK)
  })
})
