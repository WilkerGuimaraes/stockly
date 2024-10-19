import { DollarSign } from "lucide-react";
import { SummaryCard } from "./summary-card";
import { formatCurrency } from "@/app/_helpers/currency";
import { getTodayRevenue } from "@/app/_data-access/dashboard/get-today-revenue";

const TodayRevenueCard = async () => {
  const todayRevenue = await getTodayRevenue();

  return (
    <SummaryCard.Root>
      <SummaryCard.Icon>
        <DollarSign />
      </SummaryCard.Icon>
      <SummaryCard.Title>Receita Hoje</SummaryCard.Title>
      <SummaryCard.Value>{formatCurrency(todayRevenue)}</SummaryCard.Value>
    </SummaryCard.Root>
  );
};

export default TodayRevenueCard;
