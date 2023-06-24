import { Auth } from 'aws-amplify';
import React, { createContext, useContext, useEffect, useState } from 'react';

type CertificationResult = {
  success: boolean;
  message: string;
};

type CurrentAuthenticatedUserResult = {
  attributes: {
    email: string;
  };
};

type UseAuth = {
  isLoading: boolean;
  isAuthenticated: boolean;
  email: string;
  signUp: (email: string, password: string) => Promise<CertificationResult>;
  signIn: (email: string, password: string) => Promise<CertificationResult>;
  signOut: () => Promise<CertificationResult>;
};

const authContext = createContext({} as UseAuth);

export const useAuth = () => useContext(authContext);

const useProvideAuth = (): UseAuth => {
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
    try {
      await Auth.signUp(_email, _password);
      setEmail(_email);
      return { success: true, message: '' };
    } catch (error) {
      // TODO エラーコードで出力するメッセージを条件分岐させる
      return {
        success: false,
        message: '認証に失敗しました。',
      };
    }
  };

  const signIn = async (_email: string, _password: string) => {
    try {
      await Auth.signIn(_email, _password);
      setEmail(_email);
      setIsAuthenticated(true);
      return { success: true, message: '' };
    } catch (error) {
      // TODO エラーコードで出力するメッセージを条件分岐させる
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
    signIn,
    signOut,
  };
};

export const ProvideAuth: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
