import { Auth } from 'aws-amplify';
import { createContext, useContext, useEffect, useState } from 'react';

type CurrentAuthenticatedUserResult = {
  attributes: {
    email: string;
  };
};

type UseAuth = {
  isLoading: boolean;
  isAuthenticated: boolean;
  email: string;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  confirmSignUp: (verificationCode: string) => Promise<void>;
  resendConfirmationCode: () => Promise<void>;
};

export const authContext = createContext({} as UseAuth);

export const useAuth = () => useContext(authContext);

export const useProvideAuth = (): UseAuth => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((result: CurrentAuthenticatedUserResult) => {
        setEmail(result.attributes.email);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch(() => {
        setEmail('');
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  const signUp = async (_email: string, _password: string) => {
    await Auth.signUp(_email, _password).catch((error) => {
      throw error;
    });
    setEmail(_email);
  };

  const signIn = async (_email: string, _password: string) => {
    await Auth.signIn(_email, _password).catch((error) => {
      throw error;
    });
    setEmail(_email);
    setIsAuthenticated(true);
  };

  const signOut = async () => {
    await Auth.signOut().catch((error) => {
      throw error;
    });
    setEmail('');
    setIsAuthenticated(false);
  };

  const confirmSignUp = async (verificationCode: string) => {
    await Auth.confirmSignUp(email, verificationCode).catch((error) => {
      throw error;
    });
  };

  const resendConfirmationCode = async () => {
    await Auth.resendSignUp(email).catch((error) => {
      throw error;
    });
  };

  return {
    isLoading,
    isAuthenticated,
    email,
    signUp,
    signIn,
    signOut,
    confirmSignUp,
    resendConfirmationCode,
  };
};
