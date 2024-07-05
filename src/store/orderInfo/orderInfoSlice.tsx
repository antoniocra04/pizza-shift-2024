import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from '../index';

interface OrderInfoState {
    name: string;
    surname: string;
    phone: string;
    email: string;
    address:{
        apartment: string;
        house: string;
        street: string;
    }
}

const initialState: OrderInfoState = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    address: {
        apartment: '',
        house: '',
        street: ''
    }
};

export const orderInfoSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addInfo: (state, action: PayloadAction<OrderInfoState>) => {
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.email = action.payload.email;
            state.address = action.payload.address;
            state.phone = action.payload.phone;
		},
	},
});

export const { addInfo } = orderInfoSlice.actions;
export const selectCart = (state: RootState): OrderInfoState => state.orderInfo;
export default orderInfoSlice.reducer;