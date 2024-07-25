import Image from "next/image";

import cardImg from "../../public/cart.png";
import { useCart } from "@/Hooks/useCart";

const Header = () => {
  const { cart } = useCart();
  console.log(cart);
  return (
    <div className="w-full py-3 bg-gradient-to-b from-cyan-700  to-cyan-900 px-10 md:px-20 flex justify-end gap-5">
      <div className="flex gap-8">
        <div className="flex relative">
          <Image width={30} src={cardImg} alt="Cart Image" />
          <p className="absolute right-0 -m-2 font-semibold text-red-300">
            {cart.length > 0 && cart.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
