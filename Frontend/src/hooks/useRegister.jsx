import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import z from "zod";
import { registerUser } from "../redux/auth/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const registerSchema = z.object({
  username: z.string().min(3, "username must be at least 3 characters").trim(),
  email: z.string().email().trim(),
  password: z
    .string()
    .trim()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    ),
});

export const useRegister = () => {
  const form = useForm({
    resolver: zodResolver(registerSchema),
  });
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await dispatch(registerUser(data)).unwrap();
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.log(err);
    }
  };
  return { form, onSubmit, status, error };
};
