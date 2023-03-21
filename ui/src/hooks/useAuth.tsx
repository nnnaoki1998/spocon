import { Amplify, Auth } from 'aws-amplify';
import React, { createContext, useContext, useEffect, useState } from 'react';
import AwsConfigAuth from '../aws-config/Auth';

Amplify.configure({ Auth: AwsConfigAuth });

type Result = {
  success: boolean;
  message: string;
};

type UseAuth = {
  isLoading: boolean;
  isAuthenticated: boolean;
  email: string;
  signUp: (email: string, password: string) => Promise<Result>;
  confirmSignUp: (verificationCode: string) => Promise<Result>;
  signIn: (email: string, password: string) => Promise<Result>;
  signOut: () => void;
};

const authContext = createContext({} as UseAuth);

export const useAuth = () => useContext(authContext);

const useProvideAuth = (): UseAuth => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((result) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        setEmail(result.email);
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
    try {
      await Auth.signUp(_email, _password);
      setEmail(_email);
      setPassword(_password);
      return { success: true, message: '' };
    } catch (error) {
      return {
        success: false,
        message: '認証に失敗しました。',
      };
    }
  };

  const signIn = async (_email: string, _password: string) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result = await Auth.signIn(_email, _password);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setEmail(result.email);
      setIsAuthenticated(true);
      return { success: true, message: '' };
    } catch (error) {
      return {
        success: false,
        message: '認証に失敗しました。',
      };
    }
  };

  const confirmSignUp = async (verificationCode: string) => {
    try {
      await Auth.confirmSignUp(email, verificationCode);
      const result = await signIn(email, password);
      setPassword('');
      return result;
    } catch (error) {
      return {
        success: false,
        message: '認証に失敗しました。',
      };
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setEmail('');
      setIsAuthenticated(false);
      return { success: true, message: '' };
    } catch (error) {
      return {
        success: false,
        message: 'ログアウトに失敗しました。',
      };
    }
  };

  return {
    isLoading,
    isAuthenticated,
    email,
    signUp,
    confirmSignUp,
    signIn,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    signOut,
  };
};

export const ProvideAuth: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
