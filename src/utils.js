'use strict';

const crypto = require('crypto');

const ALLOWED_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

/**
 * Generates a URL-friendly random string of the given length.
 * @param {number} length
 * @returns {string}
 */
function randomString(length) {
  let result = '';
  const bytes = crypto.randomBytes(length);
  for (let i = 0; i < length; i++) {
    result += ALLOWED_CHARS[bytes[i] % ALLOWED_CHARS.length];
  }
  return result;
}

/**
 * Returns current UTC time in milliseconds.
 * @returns {number}
 */
function utcTimestamp() {
  return Date.now();
}

/**
 * Computes HMAC-SHA256 of the cipherText using the given secret, returned as lowercase hex.
 * @param {string} cipherText
 * @param {string} secret
 * @returns {string}
 */
function hmacSha256(cipherText, secret) {
  return crypto.createHmac('sha256', secret).update(cipherText).digest('hex');
}

/**
 * Builds the authentication headers for a Klogs API request.
 * @param {string} apiKey
 * @param {string} secretKey
 * @returns {Object}
 */
function buildAuthHeaders(apiKey, secretKey) {
  const rnd = randomString(32);
  const timestamp = String(utcTimestamp());
  const cipherText = apiKey + rnd + timestamp;
  const signature = hmacSha256(cipherText, secretKey);

  return {
    'X-Api-Key': apiKey,
    'X-Klogs-Rnd': rnd,
    'X-Klogs-Timestamp': timestamp,
    'X-Klogs-Signature': signature,
    'Content-Type': 'application/json',
  };
}

module.exports = { randomString, utcTimestamp, hmacSha256, buildAuthHeaders };
