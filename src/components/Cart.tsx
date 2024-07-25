import Image from "next/image";

const Cart = () => {
  return (
    <div className="border-l p-6 w-[25%]">
      <div className="font-semibold text-xl">Shopping Bag</div>
      <div className="flex gap-10 justify-between py-5">
        <div className="flex gap-3">
          <Image
            width={80}
            height={80}
            src="https://storage.apex4u.com/e3c38b3d-2ea4-4be7-9b39-d909e3d8c40f.JPG"
            alt="School Smart Girl's School Shoe"
          />
          <div className="font-semibold text-sm">
            School Smart Girl's School Shoe
          </div>
        </div>
        <div className="flex-col">
          <div className="font-semibold">৳1096</div>
          <div className="text-xs underline">Remove</div>
        </div>
      </div>
      <div className="flex justify-between font-semibold">
        <div className="">Subtotal</div>
        <div>৳1096</div>
      </div>
    </div>
  );
};

export default Cart;
