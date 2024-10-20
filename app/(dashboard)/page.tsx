import Header from "../_components/header";
import { getDashboard } from "../_data-access/dashboard/get-dashboard";
import MostSoldProductItem from "./_components/most-sold-product-item";
import TotalRevenueCard from "./_components/total-summary-card";
import { Suspense } from "react";
import SummaryCardSkeleton from "../_components/summary-card-skeleton";
import TodayRevenueCard from "./_components/today-summary-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalInStockCard from "./_components/total-in-stock-card";
import TotalProductsCard from "./_components/total-products-card";
import Last14DaysRevenueCard from "./_components/last-14-days-revenue-card";
import ChartSkeleton from "../_components/chart-skeleton";

export default async function Home() {
  const { mostSoldProducts } = await getDashboard();

  return (
    <div className="m-8 flex w-full flex-col space-y-8 rounded-lg">
      <Header.Root>
        <Header.Left>
          <Header.SubTitle>Visão geral dos dados</Header.SubTitle>
          <Header.Title>Dashboard</Header.Title>
        </Header.Left>
      </Header.Root>

      <div className="grid grid-cols-2 gap-6">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalRevenueCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TodayRevenueCard />
        </Suspense>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalSalesCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalInStockCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalProductsCard />
        </Suspense>
      </div>

      <div className="grid min-h-0 grid-cols-[minmax(0,2.5fr),minmax(0,1fr)] gap-6">
        <Suspense fallback={<ChartSkeleton />}>
          <Last14DaysRevenueCard />
        </Suspense>

        <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white">
          <p className="p-6 text-lg font-semibold text-slate-900">
            Produtos mais vendidos
          </p>

          <div className="mt-6 space-y-7 overflow-y-auto px-6 pb-6">
            {mostSoldProducts.map((product) => (
              <MostSoldProductItem key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
