import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FormDetailCustomers } from "../../../components/form-detail/form-detail-customers";
import { getDetailsCustomers } from "../customers.services";
export const DetailsCustomers = () => {
  const params = useParams();
  const { dataDetails } = useSelector(state => state.customers);
  const { loading } = useSelector(state => state.customers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsCustomers(params.id));
  }, [params]);
  return (
    <div>
      {loading ? (
        <div className="flex items-end justify-center">
          <img src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-17.jpg" />
        </div>
      ) : (
        <FormDetailCustomers
          nameCustomers={dataDetails.name}
          name="Customers"
          description={dataDetails.description}
          priority={dataDetails.priorityNumber}
          status={dataDetails.status}
        />
      )}
    </div>
  );
};
