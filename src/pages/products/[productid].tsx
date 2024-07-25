import { useRouter } from "next/router";

import data from "@/data/product-list";
import { Iproduct } from ".";

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
  return <div className="min-h-[calc(100vh-98px)]">{product.Name}</div>;
};

export default productPage;
