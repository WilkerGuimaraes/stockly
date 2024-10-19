import { PackageIcon } from "lucide-react";
import { SummaryCard } from "./summary-card";
import { getTotalInStock } from "@/app/_data-access/dashboard/get-total-in-stock";

const TotalInStockCard = async () => {
  const totalStock = await getTotalInStock();

  return (
    <SummaryCard.Root>
      <SummaryCard.Icon>
        <PackageIcon />
      </SummaryCard.Icon>
      <SummaryCard.Title>Total em Estoque</SummaryCard.Title>
      <SummaryCard.Value>{totalStock}</SummaryCard.Value>
    </SummaryCard.Root>
  );
};

export default TotalInStockCard;
