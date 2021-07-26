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

  export const formSlice = createSlice({
        name: 'forms',
        initialState,
        reducers: {
            firstNameChange: (state,action) => {
                
            }
        }

  });

  export const { firstNameChange } = formSlice.actions;

  export const selectFirstName = state => state.firstName

  export default formSlice.reducer;