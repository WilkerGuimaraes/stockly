import Header from "../_components/header";
import { ComboboxOption } from "../_components/ui/combobox";
import { DataTable } from "../_components/ui/data-table";
import { getProducts } from "../_data-access/product/get-products";
import { getSales } from "../_data-access/sale/get-sales";
import UpsertSaleButton from "./_components/create-sale-button";
import { saleTableColums } from "./_components/table-columns";

const SalesPage = async () => {
  const sales = await getSales();
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  const tableData = sales.map((sale) => ({
    ...sale,
    products,
    productOptions,
  }));

  return (
    <div className="m-8 w-full space-y-8 overflow-auto rounded-lg bg-white p-8">
      <Header.Root>
        <Header.Left>
          <Header.SubTitle>Gestão de Vendas</Header.SubTitle>
          <Header.Title>Vendas</Header.Title>
        </Header.Left>

        <Header.Right>
          <UpsertSaleButton
            products={products}
            productOptions={productOptions}
          />
        </Header.Right>
      </Header.Root>

      <DataTable columns={saleTableColums} data={tableData} />
    </div>
  );
};

export default SalesPage;
