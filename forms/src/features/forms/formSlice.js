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
        name: "forms",
        initialState,
        reducers: {
            firstNameChange: (state,action) => {
                
            }
        }

  });

  export const selectFirstName = state => state.forms.firstName;

  export default formSlice.reducer;