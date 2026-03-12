# klogs-pgw-nodejs

Klogs Payment Gateway Node.js client library.

## Installation

```bash
npm install
```

## Usage

```js
const { KlogsClient, Currency, ChargeType } = require('./src');

const client = new KlogsClient(
  'https://pgw.klogs.io',
  'YOUR_API_KEY',
  'YOUR_SECRET_KEY',
);

// Card payment
const result = await client.cardPayment.pay({
  amount: 150.00,
  currency: Currency.TRY,
  installment: 1,
  referenceCode: 'ORDER-001',
  use3d: true,
  chargeType: ChargeType.DirectSale,
  email: 'customer@example.com',
  returnURL: 'https://yourshop.com/callback',
  card: {
    cardHolderName: 'John Doe',
    cardNumber: '4111111111111111',
    cvv: '123',
    expireMonth: 12,
    expireYear: 2026,
  },
});

// Hosted payment page
const hosted = await client.hostedPayment.createPayment({
  amount: 200.00,
  currency: Currency.TRY,
  reference: 'ORDER-002',
  returnURL: 'https://yourshop.com/callback',
});
console.log(hosted.link);
```

## Available Services

| Property | Description |
|---|---|
| `client.cardPayment` | Direct card charge, provision, refund, void, commissions |
| `client.hostedPayment` | Create hosted payment page |
| `client.paymentChannel` | CRUD for payment channels |
| `client.paymentSystemGroup` | CRUD for payment system groups |
| `client.paymentSystem` | CRUD for payment systems, parameters, commission rates |
| `client.transaction` | List and detail transactions, refund, void |
| `client.paymentLink` | Payment link recipient metadata |

## Example

```bash
node examples/example_payment.js
```
