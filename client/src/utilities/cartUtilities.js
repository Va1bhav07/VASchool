import CryptoJS from "crypto-js";

export function setEncryptedGuestCartData(cartData) {
  const encryptedGuestCartData = CryptoJS.AES.encrypt(
    JSON.stringify(cartData),
    process.env.REACT_APP_CART_SECRET_KEY
      ? process.env.REACT_APP_CART_SECRET_KEY
      : "cart-secret-key"
  ).toString();
  localStorage.setItem("encryptedCartData", encryptedGuestCartData);
}

export function getDecryptedGuestCartData() {
  const encryptedDataFromStorage = localStorage.getItem("encryptedCartData");
  if (encryptedDataFromStorage) {
    const bytes = CryptoJS.AES.decrypt(
      encryptedDataFromStorage,
      process.env.REACT_APP_CART_SECRET_KEY
        ? process.env.REACT_APP_CART_SECRET_KEY
        : "cart-secret-key"
    );
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
  return [];
}