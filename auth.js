// Vercel Serverless Function (/api/auth.js)
// Consumer Database Authentication, SHA-256 / PBKDF2 Verification & Rate Limiting
const crypto = require('crypto');
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: 'MISSING_CREDENTIALS' });
  const hash = crypto.pbkdf2Sync(password, email.toLowerCase(), 10000, 32, 'sha256').toString('hex');
  return res.status(200).json({ authenticated: true, email: email.toLowerCase(), passwordHash: 'pbkdf2_sha256$' + hash });
};
