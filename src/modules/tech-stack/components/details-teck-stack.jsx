import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { FormDetailCustomers } from "../../../components/form-detail/form-detail";
import { FormEdit } from "../../../components/form-edit/form-edit";
import { deleteTechStack, getDetailsTechStack, updateTechStack } from "../tech-stack.services";
export const DetailsTeckStack = () => {
  const [update, setUpdate] = useState(false);
  const params = useParams();
  const { detailsTeckStack } = useSelector(state => state.techStack);
  const { loading } = useSelector(state => state.techStack);
  const { sucess } = useSelector(state => state.techStack);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getDetailsTechStack(params.id));
  }, [params]);
  const onSubmitupdateTechStack = async datatechStacks => {
    datatechStacks.priorityNumber = parseInt(datatechStacks.priorityNumber);
    const { _id } = detailsTeckStack.record;
    await dispatch(updateTechStack(_id, datatechStacks));
  };
  const sumbitDeleteTechStacks = async () => {
    const { _id } = detailsTeckStack.record;
    await dispatch(deleteTechStack(_id));
    history.push("/tech-stack");
  };
  const redirect = () => {
    alert("Update Successful");
    history.push("/tech-stack");
  };
  return (
    <div>
      {sucess ? redirect() : null}
      {loading ? (
        <div className="flex items-end justify-center">
          <img src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-17.jpg" />
        </div>
      ) : (
        <div>
          {update ? (
            <FormEdit
              valueName={detailsTeckStack.record.name}
              valueDes={detailsTeckStack.record.description}
              valuePri={detailsTeckStack.record.priorityNumber}
              name="Project Type"
              onSubmit={onSubmitupdateTechStack}
              setUpdate={setUpdate}
              valueStatus={detailsTeckStack.record.status}
            />
          ) : (
            <FormDetailCustomers
              setUpdate={setUpdate}
              nameCustomers={detailsTeckStack.record.name}
              name="Tech Stack"
              description={detailsTeckStack.record.description}
              priority={detailsTeckStack.record.priorityNumber}
              status={detailsTeckStack.record.status}
              deleteCustomer={sumbitDeleteTechStacks}
            />
          )}
        </div>
      )}
    </div>
  );
};
