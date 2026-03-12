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
   * Lists transactions with pagination and optional filters.
   * @param {{
   *   search?: string,
   *   startedAt?: string,
   *   endedAt?: string,
   *   type?: number,
   *   status?: number,
   *   page?: number,
   *   pageSize?: number,
   *   orderBy?: string,
   *   dir?: string
   * }} [query]
   * @returns {Promise<any>}
   */
  list(query = {}) {
    const params = { page: 1, pageSize: 10, ...query };
    return this._http.get('api/trx', params);
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
    return this._http.post('api/cardPayment/refund', model);
  }

  /**
   * Voids a transaction.
   * @param {{ referenceCode: string }} model
   * @returns {Promise<import('../models').Response>}
   */
  void(model) {
    return this._http.post('api/cardPayment/void', model);
  }
}

module.exports = PaymentTransactionService;
