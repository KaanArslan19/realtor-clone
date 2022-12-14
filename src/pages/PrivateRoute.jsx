import React from "react";
import { Outlet, Navigate } from "react-router";
import Spinner from "../components/Spinner";
import { useAuthStatus } from "../hooks/useAuthStatus";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <Spinner/>;
  }
  return loggedIn ? <Outlet/> : <Navigate to="/sign-in" />; // if the person is not signed in it navigates to the sign-in page
}
