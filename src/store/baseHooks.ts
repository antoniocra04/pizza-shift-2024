import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch as _useDispatch, useSelector as _useSelector } from 'react-redux';

import type { AppDispatch, RootState } from './index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = _useDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
