import React from "react";
import { authContext, useProvideAuth } from "./hooks/auth/useAuth";

export const AuthProvider: React.FC = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
  };