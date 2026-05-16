try {
  require('dotenv').config()
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') {
    throw error
  }
}
const http = require('http')
const handler = require('./api/send-email')

const PORT = 3001

const server = http.createServer(async (req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    })
    return res.end()
  }

  res.setHeader('Access-Control-Allow-Origin', '*')

  // Collect body
  let raw = ''
  req.on('data', chunk => { raw += chunk })
  req.on('end', async () => {
    try { req.body = raw ? JSON.parse(raw) : {} } catch { req.body = {} }

    // Shim Express-style res.status().json()
    res.status = code => { res.statusCode = code; return res }
    res.json   = data => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(data)) }

    await handler(req, res)
  })
})

server.listen(PORT, () =>
  console.log(`Local API ready → http://localhost:${PORT}/api/send-email`)
)
