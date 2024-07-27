import { useCart } from "@/Hooks/useCart";
import { useProducts } from "@/Hooks/useProducts";
import { Iproduct } from "@/pages/products";
import Image from "next/image";

const Card = ({ product }: { product: Iproduct }) => {
  const { addItem } = useCart();
  const { decProductQuantity } = useProducts();

  const handleClick = (product: Iproduct) => {
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
      <div className="text-sm">{product.Name}</div>
      <div className="text-sm">Available Qty: {product.AvailableQuantity}</div>
      <div className="text-emerald-500 font-semibold">
        ৳ {product?.ProductPrice?.Price}
      </div>
    </div>
  );
};

export default Card;
