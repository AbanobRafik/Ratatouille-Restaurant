import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/auth/authSlice";
import { useNavigate } from "react-router";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      console.log("logged out succesfully");
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  return { handleLogout };
};
