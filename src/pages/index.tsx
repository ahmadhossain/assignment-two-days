import Card from "@/components/Card";
import data from "@/data/product-list";

export default function Home() {
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[calc(100vh-98px)] justify-items-center  text-center">
      {data.map((el: any) => (
        <Card key={el.Id} product={el} />
      ))}
    </div>
  );
}
