import { useSelector } from "react-redux";

const ListeM = () => {
  const items = useSelector((state) => state);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListeM;
