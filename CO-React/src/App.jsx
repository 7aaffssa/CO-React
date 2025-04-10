import { Provider } from "react-redux";
import store from "./components/Slice/store";
import storeM from "./components/Manuel/StoreM";
import Ajouter from "./components/Slice/Ajouter";
import Liste from "./components/Slice/Liste";
import AjouterM from "./components/Manuel/AjouterM";
import ListeM from "./components/Manuel/ListeM";

const App = () => {
  return (
    <div>
      <div>
        <h2>Méthode createSlice</h2>
        <Provider store={store}>
          <Ajouter />
          <Liste />
        </Provider>
      </div>

      <div>
        <h2>Méthode Actions Manuelles</h2>
        <Provider store={storeM}>
          <AjouterM />
          <ListeM />
        </Provider>
      </div>
    </div>
  );
};

export default App;
