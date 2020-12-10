import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTokenUserLogin } from "../login.services";
export const FormLogin = () => {
  const { register, handleSubmit } = useForm();
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    // console.log(token);
  }, [token]);
  const onSubmit = async dataInput => {
    sessionStorage.removeItem("token");
    await dispatch(getTokenUserLogin(dataInput));
    history.push("/project-type");
  };
  return (
    <div className="bg-blue-400 h-screen w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        {token.loading ? (
          <img src="https://pikselitaidetta.files.wordpress.com/2016/04/new-piskel-31.gif" />
        ) : (
          <div
            className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
            style={{ height: "500px" }}
          >
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-thin">Admin Page</h1>
                <div className="w-full mt-4">
                  <form className="form-horizontal w-3/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mt-4">
                      <input
                        ref={register}
                        id="email"
                        type="text"
                        className="flex-grow outline-none shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <input
                        ref={register}
                        id="password"
                        type="password"
                        className="flex-grow shadow outline-none appearance-none border rounded py-2 px-3 text-grey-darker"
                        name="password"
                        required
                        placeholder="Password"
                      />
                    </div>
                    <div className="flex items-center mt-4">
                      <input type="checkbox" name="remember" id="remember" className="mr-2 cursor-pointer" />{" "}
                      <label htmlFor="remember" className="text-sm text-grey-dark">
                        Remember Me
                      </label>
                    </div>
                    <div className="flex flex-col mt-8">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="text-center mt-4">
                    <a className="no-underline hover:underline text-blue-dark text-xs" href="#">
                      Forgot Your Password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hidden md:block md:w-1/2 rounded-r-lg"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
