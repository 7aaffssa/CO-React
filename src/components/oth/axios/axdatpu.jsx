import axios from "axios"
export default function Axioss() {
    const fetchData = async () => {
        const response = await axios.get('../../../public/data/data.json');
        const data = await response.json();
        console.table(data);
      };
        fetchData();
  return (
    <div>
      <h1>axios</h1>
    </div>
  )
}