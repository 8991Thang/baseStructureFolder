import { FormCreat } from "../../components/form-create/form-create";
import { TitlePage } from "../../components/title-page/title-page";
import { creatNewProjectType } from "../../modules/project-type/project-type.services";

export const CreateCustomers = () => {
  return (
    <div className="mt-10">
      <TitlePage content="ADD Customers " />
      <div className="flex justify-center">
        <FormCreat name="Customers" action={creatNewProjectType} />
      </div>
    </div>
  );
};
