import { Navigate } from "react-router-dom";

export default function AuthGuard({ children }) {
  const isAuthenticated = localStorage.getItem("user");

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}
