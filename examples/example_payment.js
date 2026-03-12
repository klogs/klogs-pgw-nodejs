'use strict';

const { KlogsClient, Currency, ChargeType } = require('../src');

async function main() {
  const client = new KlogsClient(
    'https://pgw.klogs.io',
    'YOUR_API_KEY',
    'YOUR_SECRET_KEY',
  );

  // ── Card payment ─────────────────────────────────────────────────────────────
  const payResult = await client.cardPayment.pay({
    amount: 150.00,
    currency: Currency.TRY,
    installment: 1,
    referenceCode: 'ORDER-001',
    use3d: true,
    chargeType: ChargeType.DirectSale,
    email: 'customer@example.com',
    phone: '5551234567',
    returnURL: 'https://yourshop.com/payment/callback',
    card: {
      cardHolderName: 'John Doe',
      cardNumber: '4111111111111111',
      cvv: '123',
      expireMonth: 12,
      expireYear: 2026,
    },
  });
  console.log('Pay result:', payResult);

  // ── Hosted payment ────────────────────────────────────────────────────────────
  const hostedResult = await client.hostedPayment.createPayment({
    amount: 200.00,
    currency: Currency.TRY,
    reference: 'ORDER-002',
    email: 'customer@example.com',
    phone: '5551234567',
    returnURL: 'https://yourshop.com/payment/callback',
    fullName: 'John Doe',
    chargeType: ChargeType.DirectSale,
  });
  console.log('Hosted payment link:', hostedResult.link);

  // ── Commission by BIN ─────────────────────────────────────────────────────────
  const commissions = await client.cardPayment.commissionsByBin('411111', 150, 'TRY');
  console.log('Commissions:', JSON.stringify(commissions, null, 2));

  // ── Transaction list ──────────────────────────────────────────────────────────
  const transactions = await client.transaction.list({ page: 1, pageSize: 20 });
  console.log('Transactions:', transactions);
}

main().catch(console.error);
