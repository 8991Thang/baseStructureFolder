import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { FormDetailCustomers } from "../../../components/form-detail/form-detail";
import { FormEdit } from "../../../components/form-edit/form-edit";
import { deleteCustomer, getDetailsCustomers, updateCustomer } from "../customers.services";
export const DetailsCustomers = () => {
  const [update, setUpdate] = useState(false);
  const params = useParams();
  const { dataDetails } = useSelector(state => state.customers);
  const { loading } = useSelector(state => state.customers);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getDetailsCustomers(params.id));
  }, [params]);
  const onSubmitupdateCustomer = async dataCustomers => {
    dataCustomers.priorityNumber = parseInt(dataCustomers.priorityNumber);
    const { _id } = dataDetails;
    await dispatch(updateCustomer(_id, dataCustomers));
    history.push("/customers");
  };
  const sumbitDeleteCustomers = async () => {
    const { _id } = dataDetails;
    await dispatch(deleteCustomer(_id));
    history.push("/customers");
  };
  return (
    <div>
      {loading ? (
        <div className="flex items-end justify-center">
          <img src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-17.jpg" />
        </div>
      ) : (
        <div>
          {update ? (
            <FormEdit
              valueName={dataDetails.name}
              valueDes={dataDetails.description}
              valuePri={dataDetails.priorityNumber}
              name="Customers"
              onSubmit={onSubmitupdateCustomer}
              setUpdate={setUpdate}
              valueStatus={dataDetails.status}
            />
          ) : (
            <FormDetailCustomers
              setUpdate={setUpdate}
              nameCustomers={dataDetails.name}
              name="Customers"
              description={dataDetails.description}
              priority={dataDetails.priorityNumber}
              status={dataDetails.status}
              deleteCustomer={sumbitDeleteCustomers}
            />
          )}
        </div>
      )}
    </div>
  );
};
