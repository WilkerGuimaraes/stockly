import { CircleDollarSign } from "lucide-react";
import { SummaryCard } from "./summary-card";
import { getTotalSales } from "@/app/_data-access/dashboard/get-total-sales";

const TotalSalesCard = async () => {
  const totalSales = await getTotalSales();

  return (
    <SummaryCard.Root>
      <SummaryCard.Icon>
        <CircleDollarSign />
      </SummaryCard.Icon>
      <SummaryCard.Title>Vendas Totais</SummaryCard.Title>
      <SummaryCard.Value>{totalSales}</SummaryCard.Value>
    </SummaryCard.Root>
  );
};

export default TotalSalesCard;
