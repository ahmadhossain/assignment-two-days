import { useCart } from "@/Hooks/useCart";
import { Iproduct } from "@/pages/products";
import Image from "next/image";
import { useEffect } from "react";

const countTotal = (cart: Iproduct[]) => {
  let sum = 0;
  cart.forEach((element) => {
    sum += element.ProductPrice.Price * element.count;
  });
  return sum;
};

const Cart = () => {
  const { cart, addAll, deleteItem } = useCart();

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    const cartObj = cartData ? JSON.parse(cartData) : [];

    addAll(cartObj);
  }, []);

  return (
    <>
      <div className="border-l p-3 lg:p-6 w-[25%]">
        <div className="font-semibold text-base lg:text-xl pb-3">
          Shopping Bag
        </div>
        {cart.map((el) => (
          <div className="lg:flex border-b gap-10 justify-between py-1">
            <div className="lg:flex gap-3">
              <Image
                width={80}
                height={80}
                src={el.FeaturedImageUrl}
                alt={el.Name}
              />
              <div>
                <div className="font-semibold text-sm">{el.Name}</div>
                <div className="flex justify-items-center p-1 text-sm text-gray-600 font-medium">
                  Qty: {el.count}
                </div>
              </div>
            </div>
            <div className="flex-col">
              <div className="font-semibold">৳{el.ProductPrice.Price}</div>
              <button
                onClick={() => deleteItem(el.Id)}
                className="text-xs underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="flex py-2 justify-between font-semibold">
          {cart.length === 0 ? (
            <div>No item in your cart</div>
          ) : (
            <>
              <div className="">Subtotal</div>
              <div>৳{countTotal(cart)}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
