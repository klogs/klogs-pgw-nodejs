'use strict';

/**
 * Card payment operations.
 */
class CardPaymentService {
  /** @param {import('../KlogsHttpClient')} http */
  constructor(http) {
    this._http = http;
  }

  /**
   * Performs a card payment.
   * @param {import('../models').CardPaymentRequest} model
   * @returns {Promise<import('../models').CardPaymentResponse>}
   */
  pay(model) {
    return this._http.post('api/cardPayment', model);
  }

  /**
   * Creates a one-time payment token.
   * @returns {Promise<import('../models').PaymentTokenResponse>}
   */
  createPaymentToken() {
    return this._http.get('api/cardPayment/token');
  }

  /**
   * Commits a provisioned payment.
   * @param {import('../models').ProvisionCommitRequest} model
   * @returns {Promise<import('../models').Response>}
   */
  provisionCommit(model) {
    return this._http.post('api/cardPayment/provisionCommit', model);
  }

  /**
   * Retrieves commission/installment options by BIN number.
   * @param {string} binNumber
   * @param {number} amount
   * @param {string} currency  - ISO 4217 code, e.g. "TRY"
   * @param {string} [cardId]  - Optional card ID for stored cards
   * @returns {Promise<import('../models').CommissionResponse>}
   */
  commissionsByBin(binNumber, amount, currency, cardId) {
    return this._http.get('api/cardPayment/installments', { binNumber, amount, currency, cardId });
  }
}

module.exports = CardPaymentService;
