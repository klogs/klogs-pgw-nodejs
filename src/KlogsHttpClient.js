'use strict';

const axios = require('axios');
const { buildAuthHeaders } = require('./utils');

/**
 * Base HTTP client that attaches Klogs authentication headers to every request.
 */
class KlogsHttpClient {
  /**
   * @param {string} baseURL   - e.g. "https://pgw.klogs.io"
   * @param {string} apiKey
   * @param {string} secretKey
   * @param {Object} [additionalHeaders]
   */
  constructor(baseURL, apiKey, secretKey, additionalHeaders = {}) {
    this._apiKey = apiKey;
    this._secretKey = secretKey;
    this._additionalHeaders = additionalHeaders;

    this._axios = axios.create({
      baseURL: baseURL.replace(/\/+$/, ''),
    });
  }

  _getHeaders() {
    return Object.assign({}, buildAuthHeaders(this._apiKey, this._secretKey), this._additionalHeaders);
  }

  /**
   * @param {string} resourceUri
   * @param {Object} [params]  - query string parameters
   * @returns {Promise<any>}
   */
  async get(resourceUri, params) {
    const response = await this._axios.get(resourceUri, {
      headers: this._getHeaders(),
      params,
    });
    return response.data;
  }

  /**
   * @param {string} resourceUri
   * @param {Object} body
   * @returns {Promise<any>}
   */
  async post(resourceUri, body) {
    const response = await this._axios.post(resourceUri, body, {
      headers: this._getHeaders(),
    });
    return response.data;
  }

  /**
   * @param {string} resourceUri
   * @param {Object|null} body
   * @returns {Promise<any>}
   */
  async put(resourceUri, body) {
    const response = await this._axios.put(resourceUri, body ?? {}, {
      headers: this._getHeaders(),
    });
    return response.data;
  }

  /**
   * @param {string} resourceUri
   * @returns {Promise<any>}
   */
  async delete(resourceUri) {
    const response = await this._axios.delete(resourceUri, {
      headers: this._getHeaders(),
    });
    return response.data;
  }
}

module.exports = KlogsHttpClient;
