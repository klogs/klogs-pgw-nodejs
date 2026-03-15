'use strict';

const KlogsHttpClient = require('./KlogsHttpClient');
const CardPaymentService = require('./services/CardPaymentService');
const HostedPaymentService = require('./services/HostedPaymentService');
const PaymentTransactionService = require('./services/PaymentTransactionService');

/**
 * Main entry point for the Klogs Payment Gateway client.
 *
 * @example
 * const { KlogsClient } = require('@klogs/payment-gateway-client');
 * const client = new KlogsClient('https://pgw.klogs.io', 'YOUR_API_KEY', 'YOUR_SECRET_KEY');
 * const result = await client.cardPayment.pay({ amount: 100, currency: 'TRY', ... });
 */
class KlogsClient {
  /**
   * @param {string} baseURL        - API base URL (default: https://pgw.klogs.io)
   * @param {string} apiKey         - Your API key
   * @param {string} secretKey      - Your secret key
   * @param {Object} [additionalHeaders] - Optional extra HTTP headers
   */
  constructor(baseURL = 'https://pgw.klogs.io', apiKey, secretKey, additionalHeaders) {
    const http = new KlogsHttpClient(baseURL, apiKey, secretKey, additionalHeaders);

    /** @type {CardPaymentService} */
    this.cardPayment = new CardPaymentService(http);

    /** @type {HostedPaymentService} */
    this.hostedPayment = new HostedPaymentService(http);

    /** @type {PaymentTransactionService} */
    this.transaction = new PaymentTransactionService(http);
  }
}

module.exports = KlogsClient;
