import axios from "axios"
export default function Todo() {
    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const data = response.data; 
        console.table(data);
      };
        fetchData();
  return (
    <div>
      <h1>axios</h1>
    </div>
  )
}