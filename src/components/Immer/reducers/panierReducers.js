import { produce } from "immer";
const intialState={
    panier:[{id:1, nom:'produit 1',prix:"100",quantite:4},
    {id:2, nom:'produit 2',prix:"200",quantite:2},]
}

const panierReducer=(state =intialState,action)=>{
    
    return produce(state,(draft)=>{
    switch(action.type){
        case 'addItem':{
            const panier={id:state.panier.length+1,nom:state.panier.nom,prix:state.panier.prix,quantite:state.panier.quantite}
            draft.panier.push(panier);
            break;
        };
        case 'removeItem':{
            draft.panier=draft.panier.filter(
                (panier)=>panier.id !== action.payload.id)
                break;
            };
        case 'clearItems':{ draft.panier=[]
            
            break;
        };
        
default :break
}
})
}
export default panierReducer;