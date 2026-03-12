'use strict';

/**
 * Payment system group operations.
 */
class PaymentSystemGroupService {
  /** @param {import('../KlogsHttpClient')} http */
  constructor(http) {
    this._http = http;
  }

  /**
   * Retrieves a payment system group by ID.
   * @param {string} id  - UUID
   * @returns {Promise<any>}
   */
  findById(id) {
    return this._http.get(`api/paymentSystemGroup/${id}`);
  }

  /**
   * Lists payment system groups with pagination.
   * @param {{ page?: number, pageSize?: number }} [query]
   * @returns {Promise<any>}
   */
  list(query = {}) {
    const params = { page: 1, pageSize: 10, ...query };
    return this._http.get('api/paymentSystemGroup', params);
  }

  /**
   * Creates a new payment system group.
   * @param {{ title: string, enabled: boolean, paymentSystems: string[] }} model
   * @returns {Promise<any>}
   */
  create(model) {
    return this._http.post('api/paymentSystemGroup', model);
  }

  /**
   * Updates a payment system group.
   * @param {string} id  - UUID
   * @param {{ title: string, enabled: boolean, paymentSystems: string[] }} model
   * @returns {Promise<any>}
   */
  update(id, model) {
    return this._http.put(`api/paymentSystemGroup/${id}`, model);
  }

  /**
   * Deletes a payment system group.
   * @param {string} id  - UUID
   * @returns {Promise<import('../models').Response>}
   */
  delete(id) {
    return this._http.delete(`api/paymentSystemGroup/${id}`);
  }

  /**
   * Adds a payment system to a group.
   * @param {string} groupId     - UUID
   * @param {string} systemId    - UUID
   * @returns {Promise<import('../models').Response>}
   */
  addPaymentSystem(groupId, systemId) {
    return this._http.put(`api/paymentSystemGroup/${groupId}/${systemId}`, null);
  }

  /**
   * Removes a payment system from a group.
   * @param {string} groupId     - UUID
   * @param {string} systemId    - UUID
   * @returns {Promise<import('../models').Response>}
   */
  removePaymentSystem(groupId, systemId) {
    return this._http.delete(`api/paymentSystemGroup/${groupId}/${systemId}`);
  }
}

module.exports = PaymentSystemGroupService;
