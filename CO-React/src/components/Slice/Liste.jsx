import { useSelector } from 'react-redux';

const Liste = () => {
  const items = useSelector(state => state.items);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Liste;