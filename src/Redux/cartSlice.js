import { createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({
    name: "cart",
    initialState:[],
    amount:0,
    reducers:{
        addcart: (state,action)=>{
            state.push(action.payload)
        },
        
       

        removecart: (state,action)=>{
         return  state.filter( (item)=>item.id !== action.payload)
            
        },

  



      





    }
})



export const {addcart, removecart} = cartSlice.actions;
export default cartSlice.reducer;