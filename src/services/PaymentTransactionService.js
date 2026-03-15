'use strict';

/**
 * Payment transaction operations.
 */
class PaymentTransactionService {
  /** @param {import('../KlogsHttpClient')} http */
  constructor(http) {
    this._http = http;
  }

  /**
   * Retrieves transaction details by reference code.
   * @param {string} reference
   * @returns {Promise<any>}
   */
  detail(reference) {
    return this._http.get(`api/trx/${reference}`);
  }

  /**
   * Refunds a transaction.
   * @param {{ referenceCode: string, amount: number }} model
   * @returns {Promise<import('../models').Response>}
   */
  refund(model) {
    return this._http.post('api/trx/refund', model);
  }

  /**
   * Voids a transaction.
   * @param {{ referenceCode: string }} model
   * @returns {Promise<import('../models').Response>}
   */
  void(model) {
    return this._http.post('api/trx/void', model);
  }
}

module.exports = PaymentTransactionService;
