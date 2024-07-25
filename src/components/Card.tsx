import { useCart } from "@/Hooks/useCart";
import { Iproduct } from "@/pages/products";
import Image from "next/image";

const Card = ({ product }: { product: Iproduct }) => {
  const { addItem } = useCart();

  return (
    <div
      key={product.Id}
      className="w-fit cursor-pointer md:w-60 rounded-lg p-[10%] m-[5%%] md:m-[10%]"
      onClick={() => addItem(product)}
    >
      <div>
        <Image
          width={200}
          height={100}
          src={product?.FeaturedImageUrl}
          alt={product?.Name}
        />
      </div>
      <div>{product.Name}</div>
      <div className="text-blue-500">
        ৳ {product?.ProductPrice?.Price.toString()}
      </div>
    </div>
  );
};

export default Card;
