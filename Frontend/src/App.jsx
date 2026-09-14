import { RouterProvider } from "react-router";
import { router } from "./router/router";
import { useDispatch } from "react-redux";
import { checkUser } from "./redux/auth/authSlice";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}
