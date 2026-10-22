// Vercel Serverless Function (/api/agent.js)
// Jack Studio AI Autonomous Endpoint with Rate Limiting (HTTP 429)
const rateWindows = new Map();
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-API-Key');
  if (req.method === 'OPTIONS') return res.status(200).end();
  const clientIp = req.headers['x-forwarded-for'] || 'anon';
  const now = Date.now();
  const entry = rateWindows.get(clientIp) || { count: 0, resetAt: now + 60000 };
  if (now > entry.resetAt) { entry.count = 0; entry.resetAt = now + 60000; }
  entry.count += 1;
  rateWindows.set(clientIp, entry);
  if (entry.count > 120) return res.status(429).json({ error: 'TOO_MANY_REQUESTS' });
  return res.status(200).json({ agent: 'JACK_STUDIO_AI_V9', status: 'EXECUTED', timestamp: new Date().toISOString() });
};
