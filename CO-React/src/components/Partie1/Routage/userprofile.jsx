import { useParams } from 'react-router-dom';

function UserProfile(){
let {id}= useParams();
return <h1>Profil de l`utilisateur {id}</h1>;
}
export default UserProfile;