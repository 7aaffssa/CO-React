import { createSlice } from "@reduxjs/toolkit";
const initialState={
    panier:[
        {id:1, nom:'produit 1',prix:"100",quantite:4},
        {id:2, nom:'produit 2',prix:"200",quantite:2},
    ],
}


export const panierSlice=createSlice({
    name:'panier',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const newPanier={id:state.panier.length+1,nom:action.payload.nom,prix:action.payload.prix,quantite:action.payload.quantite}
            state.panier.push(newPanier);
            console.log("succeececcece")
        },
        removeItem:(state,action)=>{
            state.panier=state.panier.filter((panie)=>panie.id !== action.payload.id);
            console.log("nononooooo")
        },
        clearCart:(state)=>{
            state.panier=[];
            console.log("nooo syyyyy")
        }

    }
})
export const{addItem,removeItem,clearCart}=panierSlice.actions;
export default panierSlice.reducer