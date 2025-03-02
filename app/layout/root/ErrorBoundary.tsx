import { useNavigate } from "react-router";

export const ErrorBoundary = () => {
  const navigate = useNavigate();

  setTimeout(() => navigate(""), 0);
};
