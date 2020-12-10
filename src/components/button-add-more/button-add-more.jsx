import { FcSettings } from "react-icons/fc";
import { useHistory } from "react-router-dom";

export const ButtonAddMore = ({ name, route }) => {
  const history = useHistory();
  const redirectRouter = route => {
    history.push(route);
  };
  return (
    <button className="flex outline-none border-none" onClick={() => redirectRouter(route)}>
      <p className="font-semibold">{name}</p>
      <FcSettings className="text-2xl ml-2 " />
    </button>
  );
};
