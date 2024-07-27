import { useRouter } from "next/router";

import data from "@/data/product-list";
import { Iproduct } from ".";
import Image from "next/image";

export async function getStaticPaths() {
  const paths = data.slice(0, 5).map((el) => ({
    params: { productid: el.Id },
  }));

  return { paths, fallback: true };
}

export const getStaticProps = async (context: any) => {
  const allPaths = data.map((el) => el.Id);

  if (!allPaths.includes(context.params.productid)) return { notFound: true };

  const product = data.find((prd) => context.params.productid === prd.Id);

  return { props: { product }, revalidate: 40 };
};

// 657abe207c6b11d241add3c4
const productPage = ({ product }: { product: Iproduct }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="min-h-[calc(100vh-98px)]">Loading product...</div>;
  }
  return (
    <div className="flex justify-center gap-10 py-20 min-h-[calc(100vh-54px)]">
      <div>
        <Image
          width={300}
          height={300}
          src={product?.FeaturedImageUrl}
          alt={product?.Name}
        />
      </div>
      <div>
        <div className="text-xl mb-3 font-semibold">{product.Name}</div>
        <div className="flex font-semibold gap-2">
          <div className="text-gray-400 text-lg line-through">
            ৳{product.ProductPrice.OldPrice}
          </div>
          <div className="text-emerald-500 text-lg">
            ৳{product.ProductPrice.Price}
          </div>
        </div>
        <div className="text-base py-2">
          Available Quantity: {product.AvailableQuantity}
        </div>
      </div>
    </div>
  );
};

export default productPage;
