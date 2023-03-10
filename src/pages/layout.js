import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile</Link>

      <Outlet />
    </>
  );
}
