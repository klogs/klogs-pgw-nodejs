'use strict';

/**
 * Hosted payment (payment page) operations.
 */
class HostedPaymentService {
  /** @param {import('../KlogsHttpClient')} http */
  constructor(http) {
    this._http = http;
  }

  /**
   * Creates a hosted payment and returns a payment page link.
   * @param {import('../models').HostedPaymentRequest} model
   * @returns {Promise<import('../models').CreateHostedPaymentResponse>}
   */
  createPayment(model) {
    return this._http.post('api/payment', model);
  }
}

module.exports = HostedPaymentService;
