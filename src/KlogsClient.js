'use strict';

const KlogsHttpClient = require('./KlogsHttpClient');
const CardPaymentService = require('./services/CardPaymentService');
const HostedPaymentService = require('./services/HostedPaymentService');
const PaymentChannelService = require('./services/PaymentChannelService');
const PaymentSystemGroupService = require('./services/PaymentSystemGroupService');
const PaymentSystemService = require('./services/PaymentSystemService');
const PaymentTransactionService = require('./services/PaymentTransactionService');
const PaymentLinkService = require('./services/PaymentLinkService');

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

    /** @type {PaymentChannelService} */
    this.paymentChannel = new PaymentChannelService(http);

    /** @type {PaymentSystemGroupService} */
    this.paymentSystemGroup = new PaymentSystemGroupService(http);

    /** @type {PaymentSystemService} */
    this.paymentSystem = new PaymentSystemService(http);

    /** @type {PaymentTransactionService} */
    this.transaction = new PaymentTransactionService(http);

    /** @type {PaymentLinkService} */
    this.paymentLink = new PaymentLinkService(http);
  }
}

module.exports = KlogsClient;
