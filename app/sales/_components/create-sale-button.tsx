"use client";

import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import { ProductDto } from "@/app/_data-access/product/get-products";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import UpsertSheetContent from "./upsert-sheet-content";
import { PlusIcon } from "lucide-react";

interface CreateSaleButtonProps {
  products: ProductDto[];
  productOptions: ComboboxOption[];
}

const CreateSaleButton = (props: CreateSaleButtonProps) => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger asChild>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Nova Venda
        </Button>
      </SheetTrigger>

      <UpsertSheetContent setSheetIsOpen={setSheetIsOpen} {...props} />
    </Sheet>
  );
};

export default CreateSaleButton;
