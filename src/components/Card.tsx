import { useCart } from "@/Hooks/useCart";
import { useProducts } from "@/Hooks/useProducts";
import Image from "next/image";
import { Iproduct } from "./model/product";

const Card = ({ product }: { product: Iproduct }) => {
  const { addItem } = useCart();
  const { decProductQuantity } = useProducts();

  const isAvailable = product.AvailableQuantity !== 0;

  const handleClick = (product: Iproduct) => {
    if (!isAvailable) return;
    addItem(product);
    decProductQuantity(product.Id);
  };

  return (
    <div
      key={product.Id}
      className="text-start w-fit cursor-pointer hover:shadow-md md:w-60 rounded-lg p-[5%] lg:p-[10%] m-[5%] md:m-[10%]"
      onClick={() => handleClick(product)}
    >
      <div>
        <Image
          width={200}
          height={200}
          src={product?.FeaturedImageUrl}
          alt={product?.Name}
        />
      </div>
      <div className={`text-sm ${!isAvailable && "text-gray-400"}`}>
        {product.Name}
      </div>
      <div className={`text-sm ${!isAvailable && "text-red-300"}`}>
        Available Qty: {product.AvailableQuantity}
      </div>
      <div
        className={`text-emerald-500 font-semibold ${
          !isAvailable && "text-gray-400"
        }`}
      >
        ৳ {product?.ProductPrice?.Price}
      </div>
    </div>
  );
};

export default Card;
