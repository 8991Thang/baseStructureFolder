import { FormCreat } from "../../components/form-create/form-create";
import { TitlePage } from "../../components/title-page/title-page";
import { creatNewProjectType } from "../../modules/project-type/project-type.services";

export const CreateProjectType = () => {
  return (
    <div className="mt-10">
      <TitlePage content="ADD Project Type " />
      <div className="flex justify-center">
        <FormCreat name="Project Type" action={creatNewProjectType} />
      </div>
    </div>
  );
};
