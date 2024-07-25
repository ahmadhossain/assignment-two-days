import Card from "@/components/Card";
import Cart from "@/components/Cart";
import data from "@/data/product-list";
import Image from "next/image";

export default function Home() {
  console.log(data);
  return (
    <div className="flex">
      <div className="w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[calc(100vh-98px)] justify-items-center  text-center">
        {data.map((el: any) => (
          <Card key={el.Id} product={el} />
        ))}
      </div>
      <Cart />
    </div>
  );
}
