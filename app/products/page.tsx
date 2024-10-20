import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";
import CreateProductButton from "./_components/create-product-button";
import Header from "../_components/header";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="m-8 w-full space-y-8 overflow-auto rounded-lg bg-white p-8">
      <Header.Root>
        <Header.Left>
          <Header.Title>Produtos</Header.Title>
          <Header.SubTitle>Gestão de Produtos</Header.SubTitle>
        </Header.Left>

        <Header.Right>
          <CreateProductButton />
        </Header.Right>
      </Header.Root>

      <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </div>
  );
};

export default ProductsPage;
