import CryptoJS from 'crypto-js';

const cartSecretKey = import.meta.env.VITE_CART_SECRET_KEY;

export function setEncryptedGuestCartData(cartData) {
  const encryptedGuestCartData = CryptoJS.AES.encrypt(
    JSON.stringify(cartData),
    cartSecretKey ?? 'cart-secret-key'
  ).toString();
  localStorage.setItem('encryptedCartData', encryptedGuestCartData);
}

export function getDecryptedGuestCartData() {
  const encryptedDataFromStorage = localStorage.getItem('encryptedCartData');
  if (encryptedDataFromStorage) {
    const bytes = CryptoJS.AES.decrypt(
      encryptedDataFromStorage,
      cartSecretKey ?? 'cart-secret-key'
    );
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
  return [];
}
