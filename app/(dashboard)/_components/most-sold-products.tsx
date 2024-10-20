import { getMostSoldProducts } from "@/app/_data-access/dashboard/get-most-sold-products";
import MostSoldProductItem from "./most-sold-product-item";

const MostSoldProducts = async () => {
  const mostSoldProducts = await getMostSoldProducts();

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white">
      <p className="px-6 pt-6 text-lg font-semibold text-slate-900">
        Produtos mais vendidos
      </p>

      <div className="mt-6 space-y-7 overflow-y-auto px-6 pb-6">
        {mostSoldProducts.map((product) => (
          <MostSoldProductItem key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export const MostSoldProductsSkeleton = () => {
  const products = Array.from({ length: 3 });

  return (
    <div className="flex flex-col justify-between rounded-lg bg-white p-6">
      <div className="animate-pulse-custom h-5 w-48 animate-pulse rounded bg-gray-300"></div>

      {products.map((_, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="animate-pulse-custom h-5 w-28 animate-pulse rounded bg-gray-300"></div>
            <div className="animate-pulse-custom h-5 w-20 animate-pulse rounded bg-gray-300"></div>
            <div className="animate-pulse-custom h-5 w-28 animate-pulse rounded bg-gray-300"></div>
          </div>

          <div className="animate-pulse-custom h-5 w-28 animate-pulse rounded bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
};

export default MostSoldProducts;
