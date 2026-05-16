const handler = require('../../api/send-email')

const mockSendMail = jest.fn().mockResolvedValue({ messageId: 'test-id' })

jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({ sendMail: mockSendMail }))
}))

function makeReq(body, method = 'POST') {
  return { method, body }
}

function makeRes() {
  const res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

beforeEach(() => {
  jest.clearAllMocks()
  process.env.SMTP_HOST = 'smtp.gmail.com'
  process.env.SMTP_PORT = '587'
  process.env.SMTP_SECURE = 'false'
  process.env.SMTP_USER = 'test@gmail.com'
  process.env.SMTP_PASS = 'testpassword'
  process.env.EMAIL_FROM = 'Test User <test@gmail.com>'
})

describe('POST /api/send-email', () => {
  test('returns 405 for non-POST requests', async () => {
    const req = makeReq({}, 'GET')
    const res = makeRes()
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(405)
    expect(res.json).toHaveBeenCalledWith({ error: 'Method not allowed' })
  })

  test('returns 400 when fields are missing', async () => {
    const req = makeReq({ name: 'John' })
    const res = makeRes()
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ error: 'All fields are required' })
  })

  test('returns 400 for invalid email format', async () => {
    const req = makeReq({ name: 'John', email: 'notanemail', message: 'Hello' })
    const res = makeRes()
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid email address' })
  })

  test('returns 200 and sends email on valid input', async () => {
    const req = makeReq({ name: 'John', email: 'john@example.com', message: 'Hello there' })
    const res = makeRes()
    await handler(req, res)
    expect(mockSendMail).toHaveBeenCalledTimes(1)
    expect(mockSendMail).toHaveBeenCalledWith(expect.objectContaining({
      to: 'test@gmail.com',
      replyTo: 'john@example.com',
      subject: 'CV Contact: Message from John',
    }))
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ success: true })
  })

  test('returns 500 when nodemailer throws', async () => {
    mockSendMail.mockRejectedValueOnce(new Error('SMTP connection refused'))
    const req = makeReq({ name: 'John', email: 'john@example.com', message: 'Hello' })
    const res = makeRes()
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ error: 'Failed to send email. Please try again.' })
  })
})
