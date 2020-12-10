import { ButtonAddMore } from "../../components/button-add-more/button-add-more";
import { TitlePage } from "../../components/title-page/title-page";
import { TableProjectType } from "../../modules/project-type/components/table-project-type";
export const ProjectType = () => {
  return (
    <div>
      <div className="flex justify-between w-11/12 mt-10 mb-10 items-end">
        <TitlePage content="Project Type" />
        <ButtonAddMore name="More Project Type" route="/project-type/create" />
      </div>
      <TableProjectType />
    </div>
  );
};
