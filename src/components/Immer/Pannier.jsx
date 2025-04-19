import React,{ useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addItem,removeItem,clearItems } from "./actions/panierActions";

export default function Pannier(){
    const [nom,setNom]=useState('');
    const [prix,setPrix]=useState('');
    const [quantite,setQuantite]=useState('');
    const dispatch =useDispatch();
    //! panier 1 hiya name panier 2 hiya array
    const panier=useSelector((state)=>state.panier);
    console.table(panier);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(nom,prix,quantite);
        dispatch(addItem({nom,prix,quantite}));
        setNom('')
        setPrix('')
        setQuantite('')}
        
    return(
        <div>
            
        <form onSubmit={handleSubmit}>
            <label>
                Nom:
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            </label>
            <label>
                Prix:
                <input type="text" value={prix} onChange={(e) => setPrix(e.target.value)} />
            </label>
            <label>
                Quantité:
                <input type="text" value={quantite} onChange={(e) => setQuantite(e.target.value)} />
            </label>
            <button type='submit'>Submit</button>
        </form>

        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                </tr>
            </thead>
            <tbody>
                {panier.map((item, index) => (
                    <tr key={index}>
                        <td>{item.nom}</td>
                        <td>{item.prix}</td>
                        <td>{item.quantite}</td>
                        <td>
                            <button onClick={() => dispatch(removeItem({ id: item.id }))}>Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={() => dispatch(clearItems())}>Clear Panier</button>
        </div>
    )

    
}
