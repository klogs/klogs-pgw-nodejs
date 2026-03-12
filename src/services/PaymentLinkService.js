'use strict';

/**
 * Payment link operations.
 */
class PaymentLinkService {
  /** @param {import('../KlogsHttpClient')} http */
  constructor(http) {
    this._http = http;
  }

  /**
   * Retrieves recipient metadata for a payment link.
   * @param {string} linkId
   * @returns {Promise<any>}
   */
  getRecipientMeta(linkId) {
    return this._http.get(`api/paymentLink/recipient-meta/${linkId}`);
  }
}

module.exports = PaymentLinkService;
