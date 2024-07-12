import { configureStore } from '@reduxjs/toolkit';

import cart from './cart/cartSlice';
import orderInfo from './orderInfo/orderInfoSlice';
import user from './user/userSlice';

export const store = configureStore({
  reducer: {
    cart,
    orderInfo,
    user
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
