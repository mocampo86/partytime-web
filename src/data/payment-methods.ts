export type PaymentMethodId = 'mercadopago' | 'visa' | 'mastercard' | 'oca';

export type PaymentMethod = {
  id: PaymentMethodId;
  label: string;
};

export const paymentMethods: readonly PaymentMethod[] = [
  { id: 'mercadopago', label: 'Mercado Pago' },
  { id: 'visa', label: 'Visa' },
  { id: 'mastercard', label: 'Mastercard' },
  { id: 'oca', label: 'OCA' },
];
