import { useSelector } from "react-redux";
import { FormCreate } from "../../../components/form-create/form-create";
import { TitlePage } from "../../../components/title-page/title-page";
import { postProjectStatus } from "../project-status.services";
export const FormCreateProjectStatus = () => {
  const dataProjectStatus = useSelector(state => state.projectStatus);
  return (
    <div>
      {dataProjectStatus.loading ? (
        <div className="flex items-end justify-center">
          <img src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-17.jpg" />
        </div>
      ) : (
        <div className="mt-10">
          <TitlePage content="ADD Project Status " />
          <div className="flex justify-center">
            <FormCreate name="Project Status" link="/project-status" action={postProjectStatus} />
          </div>
        </div>
      )}
    </div>
  );
};
