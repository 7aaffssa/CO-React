import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./store";

const Ajouter = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addItem(inputValue));
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Entrez un élément..."
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default Ajouter;
