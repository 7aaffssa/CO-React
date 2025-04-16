export default function Fetchd() {
    const fetchData = async () => {
        const response = await fetch('../../../public/data/data.json');
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