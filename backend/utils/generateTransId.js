import crypto from 'crypto';

export const generateTransactionId = (bookingId, amount) => {
  return crypto
    .createHash('sha256')
    .update(bookingId + amount + Date.now())
    .digest('hex'); // Generates a unique transaction hash
};
