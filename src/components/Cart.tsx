import { useCart } from "@/Hooks/useCart";
import { useProducts } from "@/Hooks/useProducts";
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
  const { incProductQuantity } = useProducts();
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    const cartObj = cartData ? JSON.parse(cartData) : [];

    addAll(cartObj);
  }, []);

  const handleClick = (id: string, count: number) => {
    deleteItem(id);
    incProductQuantity(id, count);
  };

  return (
    <>
      <div className="border-l p-3 lg:p-6 w-[25%]">
        <div className="font-semibold text-base lg:text-xl pb-3">
          Shopping Bag
        </div>
        {cart.map((product) => (
          <div className="lg:flex border-b gap-10 justify-between py-1">
            <div className="lg:flex gap-3">
              <Image
                width={80}
                height={80}
                src={product.FeaturedImageUrl}
                alt={product.Name}
              />
              <div>
                <div className="font-semibold text-sm">{product.Name}</div>
                <div className="flex justify-items-center p-1 text-sm text-gray-600 font-medium">
                  Qty: {product.count}
                </div>
              </div>
            </div>
            <div className="flex-col">
              <div className="font-semibold">৳{product.ProductPrice.Price}</div>
              <button
                onClick={() => handleClick(product.Id, product.count)}
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
