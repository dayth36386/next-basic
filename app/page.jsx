import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const data = await res.json();

  return (
    <div className="bg-gray-50 min-h-screen">
      <h1 className="p-10 font-extrabold text-3xl text-center text-gray-800">
        Product List
      </h1>
      <div className="flex flex-wrap justify-center gap-8 p-10">
        {/* loop data */}
        {data.products.map((product) => (
          <div 
            className="bg-white shadow-lg hover:shadow-xl transition-shadow m-5 rounded-lg max-w-xs text-center p-5"
            key={product.id}
          >
            <Link href={"/product/" + product.id}>
              <h2 className="font-bold text-lg text-gray-700 mb-3">
                {product.title}
              </h2>
              <Image
                src={product.thumbnail}
                width={300}
                height={300}
                alt={product.title}
                className="rounded-md mx-auto"
              />
              <p className="mt-3 text-gray-600">{product.description.slice(0, 50)}...</p>
              <p className="mt-2 font-bold text-xl text-red-600">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
