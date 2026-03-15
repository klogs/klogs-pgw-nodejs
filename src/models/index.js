'use strict';

/**
 * @typedef {Object} Response
 * @property {boolean} success
 * @property {{ summary: string }|null} error
 */

/**
 * @typedef {Response} CardPaymentResponse
 * @property {string} behavior
 * @property {string} link
 */

/**
 * @typedef {Response} PaymentTokenResponse
 * @property {string} token
 */

/**
 * @typedef {Response} CommissionResponse
 * @property {CardPaymentOption[]} installments
 */

/**
 * @typedef {Object} CardPaymentOption
 * @property {string} title
 * @property {string} issuerCode
 * @property {string} cardProgram
 * @property {CardPaymentOptionCommRate[]} installments
 */

/**
 * @typedef {Object} CardPaymentOptionCommRate
 * @property {number} commRate
 * @property {number} installment
 * @property {string} paymentProviderId
 * @property {string} paymentSystemId
 * @property {number|null} plusInstallment
 * @property {number|null} paymentDeferral
 * @property {string} commApplyType
 * @property {number} paidAmount
 * @property {number} netAmount
 * @property {string} cardProgram
 */

/**
 * @typedef {Response} CreateHostedPaymentResponse
 * @property {string} link
 * @property {string} paymentId
 */

/**
 * @typedef {Object} CreditCard
 * @property {string} cardHolderName
 * @property {string} cardNumber
 * @property {string} cvv
 * @property {number} expireMonth
 * @property {number} expireYear
 */

/**
 * @typedef {Object} Address
 * @property {string} name
 * @property {string} surname
 * @property {string} countryCode
 * @property {string} city
 * @property {string} district
 * @property {string} street1
 * @property {string} street2
 * @property {string} number
 * @property {string} postalCode
 * @property {string} company
 * @property {string} phone
 * @property {string} fax
 */

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} category
 * @property {number} quantity
 * @property {string} code
 * @property {string} description
 * @property {number} price
 */

/**
 * @typedef {Object} Reward
 * @property {number} amount
 * @property {boolean} useReward
 */

/**
 * @typedef {Object} CardPaymentRequest
 * @property {string} [token]
 * @property {number} amount
 * @property {number} [installment]
 * @property {string} [referenceCode]
 * @property {boolean} [useStoredCard]
 * @property {CreditCard} [card]
 * @property {string} [ownerKey]
 * @property {string} [cardId]
 * @property {boolean} [saveCard]
 * @property {string} [customerIp]
 * @property {Reward} [reward]
 * @property {Address} [invoice]
 * @property {Address} [shipping]
 * @property {string} [explanation]
 * @property {boolean} [use3d]
 * @property {Object.<string,string>} [additionalData]
 * @property {string} [currency]   - ISO 4217, e.g. "TRY"
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [returnURL]
 * @property {'directSale'|'provision'} [chargeType]
 * @property {string} [paymentSystemCode]
 * @property {string} [nationalNumber]
 * @property {Product[]} [products]
 */

/**
 * @typedef {Object} HostedPaymentRequest
 * @property {number} amount
 * @property {string} [currency]
 * @property {string} [referenceCode]
 * @property {Address} [invoice]
 * @property {Address} [shipping]
 * @property {string} [explanation]
 * @property {Object.<string,string>} [additionalData]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [returnURL]
 * @property {'directSale'|'provision'} [chargeType]
 * @property {string} [fullName]
 * @property {string} [nationalNumber]
 * @property {Product[]} [products]
 * @property {string} [paymentMethod]
 */

/**
 * @typedef {Object} ProvisionCommitRequest
 * @property {string} referenceCode
 * @property {number} [amount]
 */

/**
 * @typedef {Object} RefundRequest
 * @property {string} referenceCode
 * @property {number} amount
 */

/**
 * @typedef {Object} VoidRequest
 * @property {string} referenceCode
 */

/** Currency constants */
const Currency = Object.freeze({
  TRY: 'TRY',
  EUR: 'EUR',
  USD: 'USD',
  GBP: 'GBP',
  SAR: 'SAR',
});

/** ChargeType constants */
const ChargeType = Object.freeze({
  DirectSale: 'directSale',
  Provision: 'provision',
});

/** TransactionType enum */
const TransactionType = Object.freeze({
  Sale: 1,
  Void: 2,
  Refund: 3,
  Provision: 4,
  ProvisionCommit: 5,
});

/** TransactionStatus enum */
const TransactionStatus = Object.freeze({
  Success: 1,
  Failed: 2,
  Pending: 3,
  Unknown: 5,
});

module.exports = { Currency, ChargeType, TransactionType, TransactionStatus };
