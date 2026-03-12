'use strict';

/**
 * Payment system operations.
 */
class PaymentSystemService {
  /** @param {import('../KlogsHttpClient')} http */
  constructor(http) {
    this._http = http;
  }

  /**
   * Retrieves a payment system by ID.
   * @param {string} id  - UUID
   * @returns {Promise<any>}
   */
  findById(id) {
    return this._http.get(`api/paymentSystem/${id}`);
  }

  /**
   * Lists payment systems with pagination.
   * @param {{ page?: number, pageSize?: number }} [query]
   * @returns {Promise<any>}
   */
  list(query = {}) {
    const params = { page: 1, pageSize: 10, ...query };
    return this._http.get('api/paymentSystem', params);
  }

  /**
   * Creates a new payment system.
   * @param {Object} model
   * @returns {Promise<any>}
   */
  create(model) {
    return this._http.post('api/paymentSystem', model);
  }

  /**
   * Updates a payment system.
   * @param {string} id   - UUID
   * @param {Object} model
   * @returns {Promise<any>}
   */
  update(id, model) {
    return this._http.put(`api/paymentSystem/${id}`, model);
  }

  /**
   * Deletes a payment system.
   * @param {string} id  - UUID
   * @returns {Promise<import('../models').Response>}
   */
  delete(id) {
    return this._http.delete(`api/paymentSystem/${id}`);
  }

  /**
   * Synchronises commission rates for a payment system.
   * @param {string} id             - UUID
   * @param {Object[]} installments - Commission rate objects
   * @returns {Promise<import('../models').Response>}
   */
  syncCommRates(id, installments) {
    return this._http.put(`api/paymentSystem/${id}/installments`, { installments });
  }

  /**
   * Retrieves commission rates for a payment system.
   * @param {string} id  - UUID
   * @returns {Promise<any>}
   */
  getCommRates(id) {
    return this._http.get(`api/paymentSystem/${id}/installments`);
  }

  /**
   * Retrieves parameters for a payment system.
   * @param {string} [paymentSystemId]  - UUID (optional)
   * @param {string} [systemKey]
   * @returns {Promise<any>}
   */
  getParameters(paymentSystemId, systemKey) {
    const params = {};
    if (paymentSystemId) params.paymentSystemId = paymentSystemId;
    if (systemKey) params.sysKey = systemKey;
    return this._http.get('api/paymentSystem/parameters', params);
  }

  /**
   * Saves parameters for a payment system.
   * @param {string} id                          - UUID
   * @param {{ name: string, value: string }[]} model
   * @returns {Promise<import('../models').Response>}
   */
  saveParameters(id, model) {
    return this._http.put(`api/paymentSystem/${id}/parameters`, model);
  }

  /**
   * Retrieves available payment providers.
   * @returns {Promise<any>}
   */
  providers() {
    return this._http.get('api/paymentSystem/provider');
  }

  /**
   * Retrieves supported payment systems for an issuer code.
   * @param {string} issuerCode
   * @returns {Promise<any>}
   */
  supportedSystems(issuerCode) {
    return this._http.get(`api/paymentSystem/supportedSystem/${issuerCode}`);
  }
}

module.exports = PaymentSystemService;
