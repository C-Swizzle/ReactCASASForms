import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: '',
    lastName: '',
    middleInitial: '',
    email: '',
    emailConfirm: '',
    phoneNumber: '',
    addressNumberAndStreet: '',
    addressLineTwo: '',
    zipCode: '',
    city: '',
    stateOrProvince: ''
  };