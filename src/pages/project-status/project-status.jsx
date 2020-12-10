import { ButtonAddMore } from "../../components/button-add-more/button-add-more";
import { TitlePage } from "../../components/title-page/title-page";
import { TableProjectStatus } from "../../modules/project-status/components/table-project-status";

export const ProjectStatus = () => {
  return (
    <div>
      <div className="flex justify-between w-11/12 mt-10 mb-10 items-end">
        <TitlePage content="Project Status" />
        <ButtonAddMore name="More Project Status" route="/project-status/create" />
      </div>
      <TableProjectStatus />
    </div>
  );
};
