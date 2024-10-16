import { deleteSale } from "@/app/_actions/sale/delete-sale";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import {
  MoreHorizontalIcon,
  ClipboardIcon,
  EditIcon,
  TrashIcon,
} from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import UpsertSheetContent from "./upsert-sheet-content";
import { useState } from "react";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { ProductDto } from "@/app/_data-access/product/get-products";
import { SaleDto } from "@/app/_data-access/sale/get-sales";

interface SalesTableDropdownMenuProps {
  sale: Pick<SaleDto, "id" | "saleProducts">;
  productsOptions: ComboboxOption[];
  products: ProductDto[];
}

const SalesTableDropdownMenu = ({
  sale,
  products,
  productsOptions,
}: SalesTableDropdownMenuProps) => {
  const [upsertSheetIsOpen, setUpsertSheetIsOpen] = useState(false);

  const { execute: executeDeleteSale } = useAction(deleteSale, {
    onSuccess: () => {
      toast.success("Venda deletada com sucesso.");
    },
    onError: () => {
      toast.error("Erro ao deletar a venda.");
    },
  });

  const handleCopyToClipboardClick = () => {
    navigator.clipboard.writeText(sale.id);
    toast.success("ID copiado para a área de transferência.");
  };

  const handleConfirmDeleteClick = () => {
    executeDeleteSale({ id: sale.id });
  };

  return (
    <Sheet open={upsertSheetIsOpen} onOpenChange={setUpsertSheetIsOpen}>
      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <MoreHorizontalIcon size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="gap-1.5"
              onClick={handleCopyToClipboardClick}
            >
              <ClipboardIcon size={16} />
              Copiar ID
            </DropdownMenuItem>
            <SheetTrigger asChild>
              <DropdownMenuItem className="gap-1.5">
                <EditIcon size={16} />
                Editar
              </DropdownMenuItem>
            </SheetTrigger>

            <AlertDialogTrigger asChild>
              <DropdownMenuItem className="gap-1.5">
                <TrashIcon size={16} />
                Deletar
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              Você está prestes a excluir esta venda. Esta ação não pode ser
              desfeita. Deseja continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDeleteClick}>
              Continuar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <UpsertSheetContent
        saleId={sale.id}
        productOptions={productsOptions}
        products={products}
        setSheetIsOpen={setUpsertSheetIsOpen}
        defaultSelectedProducts={sale.saleProducts.map((saleProduct) => ({
          id: saleProduct.productId,
          quantity: saleProduct.quantity,
          name: saleProduct.productName,
          price: saleProduct.unitPrice,
        }))}
      />
    </Sheet>
  );
};

export default SalesTableDropdownMenu;
