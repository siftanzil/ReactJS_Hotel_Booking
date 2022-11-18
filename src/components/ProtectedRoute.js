import React from "react";
import { Navigate } from "react-router";
import { UserAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
   const { user } = UserAuth();

   if (!user) {
      return <Navigate to="/signIn" />;
   }
   return children;
};

export default ProtectedRoute;
