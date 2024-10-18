import {
  CircleDollarSign,
  DollarSign,
  PackageIcon,
  ShoppingBasketIcon,
} from "lucide-react";
import Header from "../_components/header";
import { SummaryCard } from "./_components/summary-card";
import { getDashboard } from "../_data-access/dashboard/get-dashboard";
import { formatCurrency } from "../_helpers/currency";

export default async function Home() {
  const { totalRevenue, todayRevenue, totalSales, totalStock, totalProducts } =
    await getDashboard();

  return (
    <div className="m-8 w-full space-y-8 rounded-lg">
      <Header.Root>
        <Header.Left>
          <Header.SubTitle>Visão geral dos dados</Header.SubTitle>
          <Header.Title>Dashboard</Header.Title>
        </Header.Left>
      </Header.Root>

      <div className="grid grid-cols-2 gap-6">
        <SummaryCard.Root>
          <SummaryCard.Icon>
            <DollarSign />
          </SummaryCard.Icon>
          <SummaryCard.Title>Receita Total</SummaryCard.Title>
          <SummaryCard.Value>{formatCurrency(totalRevenue)}</SummaryCard.Value>
        </SummaryCard.Root>

        <SummaryCard.Root>
          <SummaryCard.Icon>
            <DollarSign />
          </SummaryCard.Icon>
          <SummaryCard.Title>Receita Hoje</SummaryCard.Title>
          <SummaryCard.Value>{formatCurrency(todayRevenue)}</SummaryCard.Value>
        </SummaryCard.Root>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard.Root>
          <SummaryCard.Icon>
            <CircleDollarSign />
          </SummaryCard.Icon>
          <SummaryCard.Title>Vendas Totais</SummaryCard.Title>
          <SummaryCard.Value>{formatCurrency(totalSales)}</SummaryCard.Value>
        </SummaryCard.Root>

        <SummaryCard.Root>
          <SummaryCard.Icon>
            <PackageIcon />
          </SummaryCard.Icon>
          <SummaryCard.Title>Total em Estoque</SummaryCard.Title>
          <SummaryCard.Value>{formatCurrency(totalStock)}</SummaryCard.Value>
        </SummaryCard.Root>

        <SummaryCard.Root>
          <SummaryCard.Icon>
            <ShoppingBasketIcon />
          </SummaryCard.Icon>
          <SummaryCard.Title>Produtos</SummaryCard.Title>
          <SummaryCard.Value>{formatCurrency(totalProducts)}</SummaryCard.Value>
        </SummaryCard.Root>
      </div>
    </div>
  );
}
