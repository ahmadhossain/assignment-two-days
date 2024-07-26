import { useEffect, useRef, useState } from "react";

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

export default function Home({ data }: { data: Iproduct[] }) {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    setShow(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setShow(true);
    setProducts(
      products.filter((obj) =>
        Object.keys(obj).some((key) => obj["Name"].includes(search))
      )
    );
  };

  const handleClearSearch = () => {
    setShow(false);
    setSearch("");
    setProducts(data);
  };

  return (
    <div className="flex">
      <div className="w-[75%]">
        <div className="flex justify-center pt-5">
          <form className="w-[40%]" onSubmit={handleSubmit}>
            <input
              className="w-full focus:outline-none px-4 py-2 text-gray-900 border border-gray-400 rounded-full bg-gray-50 text-base"
              placeholder="Search"
              value={search}
              onChange={handleChange}
            />
          </form>
        </div>
        {show && (
          <div className="flex justify-center gap-2 py-3">
            <div className=" text-xl font-semibold">
              Search results for: {search}
            </div>
            <button
              className="text-sm font-semibold underline"
              onClick={handleClearSearch}
            >
              Clear Search
            </button>
          </div>
        )}
        <div className="min-h-[calc(100vh-98px)] text-center">
          {products.length === 0 && show ? (
            <div className="text-lg font-semibold py-5">
              Sorry, no search results found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {products.map((el: Iproduct) => (
                <Card key={el.Id} product={el} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Cart />
    </div>
  );
}
