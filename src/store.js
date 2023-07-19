import { configureStore, createReducer } from "@reduxjs/toolkit";

const products = createReducer({
    products:[]
},{
    getProducts:(state,action)=>{
        state.products=action.payload;
    }
});


const cartProducts = createReducer({
    products:[],
},{
    updateCart:(state,action)=>{
        state.products = [action.payload,...state.products]
    },
    removeFromCart:(state,action)=>{
        state.products=action.payload
    }
})

export const store = configureStore({
    reducer:{
        products:products,
        cartProducts:cartProducts,
    }
})

