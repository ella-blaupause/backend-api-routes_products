import useSWR from "swr";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/products/${id}` : null);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{data.name}</h1>
      <p>Description: {data.description}</p>
      <small>Category: {data.category}</small>
      <p>
        {" "}
        <b>Price: {data.price}</b>
      </p>
    </>
  );
}
