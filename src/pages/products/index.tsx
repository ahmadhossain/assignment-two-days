import { useEffect, useState } from "react";

import Card from "@/components/Card";
import Cart from "@/components/Cart";
import data from "@/data/product-list";

export interface Iproduct {
  Id: string;
  Name: string;
  SeName: string;
  ColorVariants: string | null;
  ShortDescription: string | null;
  ProductPrice: { OldPrice: number; Price: number };
  FeaturedImageUrl: string;
}

export const getServerSideProps = async () => {
  return { props: { data } };
};

export default function Home({ data }: { data: any }) {
  console.log(data);
  const [products, setProducts] = useState([]);
  console.log(products, "products");

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div className="flex">
      <div className="w-[75%]">
        <div className="flex justify-center pt-5">
          <input
            className="w-[50%] focus:outline-none px-4 py-2 text-gray-900 border border-gray-400 rounded-full bg-gray-50 text-base"
            placeholder="What are you looking for?"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[calc(100vh-98px)] justify-items-center  text-center">
          {products.map((el: Iproduct) => (
            <Card key={el.Id} product={el} />
          ))}
        </div>
      </div>
      <Cart />
    </div>
  );
}
