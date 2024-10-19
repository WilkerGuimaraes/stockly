import { ShoppingBasketIcon } from "lucide-react";
import { SummaryCard } from "./summary-card";
import { getTotalProducts } from "@/app/_data-access/dashboard/get-total-products";

const TotalProductsCard = async () => {
  const totalProducts = await getTotalProducts();

  return (
    <SummaryCard.Root>
      <SummaryCard.Icon>
        <ShoppingBasketIcon />
      </SummaryCard.Icon>
      <SummaryCard.Title>Produtos</SummaryCard.Title>
      <SummaryCard.Value>{totalProducts}</SummaryCard.Value>
    </SummaryCard.Root>
  );
};

export default TotalProductsCard;
