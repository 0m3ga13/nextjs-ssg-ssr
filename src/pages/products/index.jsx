import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products/');
  const products = await res.json();
  console.log(res);
  return {
    props: {
      products,
    },
  };
}

export default function products({ products }) {
  return (
    <main className="m-2 ">
      <h1 className="mt-10  font-bold left-0 top-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl  w-auto rounded-xl border bg-gray-200 p-4 ">
        All products
      </h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link
            className="m-10 mb-2 flex justify-between  items-center  border-solid rounded-xl border-2  border-gray-600/50 p-5 "
            href={`/products/${product.id}`}
          >
            <h1 className="text-l font-medium text-gray-900 title-font mb-2">
              {' '}
              {product.title}
            </h1>
            <p className="font-bold">{product.price} $ </p>
          </Link>
        </div>
      ))}
    </main>
  );
}
