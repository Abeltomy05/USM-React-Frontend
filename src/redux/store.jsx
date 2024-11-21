import { configureStore } from '@reduxjs/toolkit';
import usereducer from './userSlice'
import AdminSlice from './adminSlice';

const store=configureStore({
    reducer:{
        user:usereducer,
        admin:AdminSlice
    }
})
export default store