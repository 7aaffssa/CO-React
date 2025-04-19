export const addItem=({nom,prix,quantite})=>({
    type: 'addItem',
    payload:{nom,prix,quantite}
  });
  export const removeItem=({id})=>({
    type:'removeItem',
    payload:{id}
  });
  
  export const clearItems=()=>({
    type:'clearItems'
  })
  export default{addItem,removeItem,clearItems};
  
  