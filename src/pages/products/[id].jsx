import Link from 'next/link';

export async function getServerPaths() {
  const res = await fetch('https://fakestoreapi.com/products/');
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/` + params.id);

  const productData = await res.json();
  return {
    props: {
      productData,
    },
  };
}

export default function productsInfo({ productData }) {
  return (
    <main className="flex text-center min-h-screen flex-col  justify-center p-24 flex-wrap">
      <h1 className="text-2xl font-medium text-gray-900 title-font">
        {productData.title}
      </h1>

      <p className="mt-2 title-font text-gray-900">{productData.description}</p>
      <p className="mt-10 fixed font-bold left-0 top-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        {productData.price}
      </p>
    </main>
  );
}
