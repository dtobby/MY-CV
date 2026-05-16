const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isValidEmail = (email) => EMAIL_REGEX.test(String(email))

describe('isValidEmail', () => {
  test('accepts valid email addresses', () => {
    expect(isValidEmail('user@example.com')).toBe(true)
    expect(isValidEmail('user.name+tag@domain.co')).toBe(true)
    expect(isValidEmail('sonamt566@gmail.com')).toBe(true)
  })

  test('rejects missing @ symbol', () => {
    expect(isValidEmail('userexample.com')).toBe(false)
  })

  test('rejects missing domain', () => {
    expect(isValidEmail('user@')).toBe(false)
  })

  test('rejects empty string', () => {
    expect(isValidEmail('')).toBe(false)
  })

  test('rejects plain text', () => {
    expect(isValidEmail('notanemail')).toBe(false)
  })

  test('rejects missing TLD', () => {
    expect(isValidEmail('user@domain')).toBe(false)
  })
})
