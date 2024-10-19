import Image from "next/image";

export default async function ProductPage({ params }) {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <Image
        src={product.thumbnail}
        width={300}
        height={300}
        alt={product.title}
        className="my-5"
      />
      <p>{product.description}</p>
      <p className="font-bold text-xl mt-5">Price: ${product.price}</p>
    </div>
  );
}
