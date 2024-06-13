import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { courseReducer } from './courseReducer';
import { cartReducer } from './cartReducer';
import { checkoutReducer } from './checkoutReducer';
export const rootReducer = combineReducers({
  authReducer,
  courseReducer,
  cartReducer,
  checkoutReducer,
});
