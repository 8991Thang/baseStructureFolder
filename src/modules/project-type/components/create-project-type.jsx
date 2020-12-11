import { FormCreate } from "../../../components/form-create/form-create";
import { TitlePage } from "../../../components/title-page/title-page";
import { creatNewProjectType } from "../project-type.services";
export const FormCreateProjectType = () => {
  return (
    <div className="mt-10">
      <TitlePage content="ADD Project Type " />
      <div className="flex justify-center">
        <FormCreate name="Project Type" link="/project-type" action={creatNewProjectType} />
      </div>
    </div>
  );
};
