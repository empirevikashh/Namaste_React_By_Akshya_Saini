import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
    }
});

export default store;

/** 
 *Create store
 *  - configureStore()-RTK
 * 
 * Provide my store to app
 *  -<Provider store = {store}> - import from react-redux
 * 
 * Slice
 *  -RTK - createSlice({
 *          name:""
 *          initialState:
 *          reducers:{
 *              addItem:(state,action=>{state = action.payload})
 *          } 
 *        })
 *      export const {addItem,removeItem} = cartSlice.actions
 *      export default cartSlice.reducer;
 * 
 *  Put that slice into store
 *        -{
 *          reducer:{
 *              cart:cartSlice,
 *              user:userSlice, {If we need more slices then we have to do like this}
 *            }
 *        }   
 */