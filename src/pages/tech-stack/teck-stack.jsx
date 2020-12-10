import { ButtonAddMore } from "../../components/button-add-more/button-add-more";
import { TitlePage } from "../../components/title-page/title-page";
import { TableTechStack } from "../../modules/tech-stack/components/table-teck-stack";
export const TechStack = () => {
  return (
    <div>
      <div className="flex justify-between w-11/12 mt-10 mb-10 items-end">
        <TitlePage content="Teck Stack" />
        <ButtonAddMore name="More Teck Stack" route="/tech-stack/create" />
      </div>
      <TableTechStack />
    </div>
  );
};
