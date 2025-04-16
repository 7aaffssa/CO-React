export default function Fetch() {
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        console.table(data);
      };
        fetchData();
  return (
    <div>
      <h1>fetch</h1>
    </div>
  )
}