import { useCart } from "@/Hooks/useCart";
import { Iproduct } from "@/pages/products";
import Image from "next/image";

const Card = ({ product }: { product: Iproduct }) => {
  const { addItem } = useCart();

  return (
    <div
      key={product.Id}
      className="w-fit cursor-pointer hover:shadow-md md:w-60 rounded-lg p-[5%] lg:p-[10%] m-[5%] md:m-[10%]"
      onClick={() => addItem(product)}
    >
      <div>
        <Image
          width={200}
          height={200}
          src={product?.FeaturedImageUrl}
          alt={product?.Name}
        />
      </div>
      <div>{product.Name}</div>
      <div className="text-emerald-500">৳ {product?.ProductPrice?.Price}</div>
      <div className="text-sm">Qty: {product.AvailableQuantity}</div>
    </div>
  );
};

export default Card;
