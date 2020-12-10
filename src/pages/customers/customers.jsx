import { ButtonAddMore } from "../../components/button-add-more/button-add-more";
import { TitlePage } from "../../components/title-page/title-page";
import { TableCustomers } from "../../modules/customers/components/table-customers";

export const Customers = () => {
  return (
    <div>
      <div className="flex justify-between w-11/12 mt-10 mb-10 items-end">
        <TitlePage content="Customers" />
        <ButtonAddMore name="More Customers" route="/customers/create" />
      </div>
      <TableCustomers />
    </div>
  );
};
