-- Jack Studio AI Production SQL Schema (INR Pricing + 2FA + Consumer DB)
CREATE TABLE IF NOT EXISTS consumers (
  uid VARCHAR(64) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  password_hash TEXT NOT NULL,
  plan VARCHAR(64) DEFAULT 'Starter',
  mrr_inr INTEGER DEFAULT 0,
  two_factor_enabled BOOLEAN DEFAULT FALSE,
  two_factor_secret VARCHAR(64),
  rate_limit_rpm INTEGER DEFAULT 60,
  api_key VARCHAR(128) UNIQUE,
  login_count INTEGER DEFAULT 1,
  status VARCHAR(32) DEFAULT 'ACTIVE',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
