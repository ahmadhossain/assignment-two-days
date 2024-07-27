import { useEffect, useRef, useState } from "react";

import Card from "@/components/Card";
import Cart from "@/components/Cart";
import data from "@/data/product-list";
import { useProducts } from "@/Hooks/useProducts";

export interface Iproduct {
  Id: string;
  Name: string;
  SeName: string;
  ColorVariants: string | null;
  ShortDescription: string | null;
  ProductPrice: { OldPrice: number; Price: number };
  FeaturedImageUrl: string;
  AvailableQuantity: number;
  count: number;
}

export const getServerSideProps = async () => {
  return { props: { data } };
};

export default function ProductListPage({ data }: { data: Iproduct[] }) {
  // const [products, setProducts] = useState<Iproduct[]>([]);
  const { products, addAllProduct } = useProducts();
  const [search, setSearch] = useState("");
  const [showSearchText, setShowSearchText] = useState(false);

  useEffect(() => {
    addAllProduct(data);
  }, [data]);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    setShowSearchText(false);
    addAllProduct(data);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowSearchText(true);
    addAllProduct(
      products.filter((obj) =>
        obj.Name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const handleClearSearch = () => {
    setShowSearchText(false);
    setSearch("");
    addAllProduct(data);
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
        {showSearchText && (
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
          {products.length === 0 && showSearchText ? (
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
