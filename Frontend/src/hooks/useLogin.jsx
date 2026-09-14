import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import z from "zod";
import { loginUser } from "../redux/auth/authSlice";

const logInSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8, "Password must be at least 8 characters").trim(),
});

export const useLogin = () => {
  const form = useForm({
    resolver: zodResolver(logInSchema),
  });
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await dispatch(loginUser(data)).unwrap();
      if (response.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { form, onSubmit, status, error };
};
