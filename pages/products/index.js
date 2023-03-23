import useSWR from "swr";

export default function Products() {
  const { data } = useSWR("/api/products");

  console.log(data);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
