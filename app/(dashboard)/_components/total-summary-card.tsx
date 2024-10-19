import { getTotalRevenue } from "@/app/_data-access/dashboard/get-total-revenue";
import { SummaryCard } from "./summary-card";
import { DollarSign } from "lucide-react";
import { formatCurrency } from "@/app/_helpers/currency";

const TotalRevenueCard = async () => {
  const totalRevenue = await getTotalRevenue();

  return (
    <SummaryCard.Root>
      <SummaryCard.Icon>
        <DollarSign />
      </SummaryCard.Icon>
      <SummaryCard.Title>Receita Total</SummaryCard.Title>
      <SummaryCard.Value>{formatCurrency(totalRevenue)}</SummaryCard.Value>
    </SummaryCard.Root>
  );
};

export default TotalRevenueCard;
