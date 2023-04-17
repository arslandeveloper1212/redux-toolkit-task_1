import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchproduct = createAsyncThunk("fetchproduct", async ()=>{
    
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const final = response.json();
    return final
})  

const product = createSlice(({
    name: "product",
    initialState:{
        isLoading:false,
        data: null,
        isError: false,
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchproduct.pending, (state,action)=>{
            state.isLoading= true

        })

        builder.addCase(fetchproduct.fulfilled , (state,action)=>{
            state.isLoading = false
            state.data = action.payload;
        })
        builder.addCase(fetchproduct.rejected,( state,action)=>{
            console.log('Error', action.payload);
            state.isError= true;
        })
    }
}));

export default product.reducer