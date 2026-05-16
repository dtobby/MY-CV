const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  const pass = (process.env.SMTP_PASS || '').replace(/\s/g, '')
  const user = process.env.SMTP_USER

  if (!user || !pass) {
    console.error('Missing SMTP credentials in environment variables')
    return res.status(500).json({ error: 'Server misconfiguration. Please try again later.' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  })

  try {
    await transporter.verify()
  } catch (err) {
    console.error('SMTP verify failed:', err.message)
    return res.status(500).json({ error: 'Failed to connect to mail server.' })
  }

  try {
    await transporter.sendMail({
      from: `"Sonam Tobgay" <${user}>`,
      to: user,
      replyTo: email,
      subject: `CV Contact: Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px">
          <h2 style="color:#0891b2">New message from your CV</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr/>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email send error:', error.message)
    return res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
}
