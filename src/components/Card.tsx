import Image from "next/image";

const Card = ({ product }: any) => {
  return (
    <div
      key={product.Id}
      className="w-fit md:w-60 rounded-lg p-[10%] m-[5%%] md:m-[10%]"
    >
      <div>
        <Image
          width={200}
          height={100}
          src={product.FeaturedImageUrl}
          alt={product.Name}
        />
      </div>
      <div>{product.Name}</div>
      <div className="text-blue-500">৳ {product.ProductPrice.Price}</div>
    </div>
  );
};

export default Card;
