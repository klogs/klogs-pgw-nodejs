'use strict';

/**
 * Payment channel management operations.
 */
class PaymentChannelService {
  /** @param {import('../KlogsHttpClient')} http */
  constructor(http) {
    this._http = http;
  }

  /**
   * Lists payment channels with pagination.
   * @param {{ page?: number, pageSize?: number, orderBy?: string, dir?: string }} [query]
   * @returns {Promise<any>}
   */
  list(query = {}) {
    const params = { page: 1, pageSize: 10, ...query };
    return this._http.get('api/paymentChannel', params);
  }

  /**
   * Creates a new payment channel.
   * @param {{ name: string, enabled: boolean }} model
   * @returns {Promise<import('../models').Response>}
   */
  add(model) {
    return this._http.post('api/paymentChannel', model);
  }

  /**
   * Updates an existing payment channel.
   * @param {string} id  - UUID
   * @param {{ name: string, enabled: boolean }} model
   * @returns {Promise<import('../models').Response>}
   */
  update(id, model) {
    return this._http.put(`api/paymentChannel/${id}`, model);
  }

  /**
   * Deletes a payment channel.
   * @param {string} id  - UUID
   * @returns {Promise<import('../models').Response>}
   */
  delete(id) {
    return this._http.delete(`api/paymentChannel/${id}`);
  }
}

module.exports = PaymentChannelService;
