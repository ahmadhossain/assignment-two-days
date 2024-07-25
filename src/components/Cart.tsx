import { useCart } from "@/Hooks/useCart";
import Image from "next/image";

const Cart = () => {
  const { cart, deleteItem } = useCart();

  return (
    <>
      <div className="border-l p-6 w-[25%]">
        <div className="font-semibold text-xl pb-3">Shopping Bag</div>
        {cart.map((el) => (
          <div className="flex border-b gap-10 justify-between py-1">
            <div className="flex gap-3">
              <Image
                width={80}
                height={80}
                src={el.FeaturedImageUrl}
                alt={el.Name}
              />
              <div className="font-semibold text-sm">{el.Name}</div>
            </div>
            <div className="flex-col">
              <div className="font-semibold">
                {el.ProductPrice.Price.toString()}
              </div>
              <button
                onClick={() => deleteItem(el.Id)}
                className="text-xs underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-between font-semibold">
          <div className="">Subtotal</div>
          <div>৳1096</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
