const {
  VALIDATE_SUCCESS,
  ERROR_MOCK,
  getVerify
} = require('./mocks')

test('success is handled', async () => {
  // GIVEN:
  const verify = getVerify()

  // WHEN we send a successful mail
  const result = await verify()

  // THEN we get a success result
  expect(result).toBe(VALIDATE_SUCCESS)
})

test('error is handled', async () => {
  // GIVEN:
  const verify = getVerify(success = false)

  // WHEN we send a erroneous mail
  expect.assertions(1)
  return verify().catch(error => {
    // THEN we get an exception
    expect(error).toEqual(ERROR_MOCK)
  })
})
