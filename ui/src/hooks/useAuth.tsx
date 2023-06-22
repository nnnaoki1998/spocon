import { Amplify, Auth } from 'aws-amplify';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Cognito } from '../aws-config/Cognito';

Amplify.configure({ Auth: Cognito });

type CertificationResult = {
  success: boolean;
  message: string;
};

type CurrentAuthenticatedUserResult = {
  username: string;
  attributes: {
    email: string;
  };
};

type UseAuth = {
  isLoading: boolean;
  isAuthenticated: boolean;
  username: string;
  email: string;
  signUp: (username: string, password: string) => Promise<CertificationResult>;
  confirmSignUp: (verificationCode: string) => Promise<CertificationResult>;
  signIn: (username: string, password: string) => Promise<CertificationResult>;
  signOut: () => Promise<CertificationResult>;
};

const authContext = createContext({} as UseAuth);

export const useAuth = () => useContext(authContext);

const useProvideAuth = (): UseAuth => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((result: CurrentAuthenticatedUserResult) => {
        setUsername(result.username);
        setEmail(result.attributes.email);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch(() => {
        setUsername('');
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  const signUp = async (_username: string, _password: string) => {
    try {
      await Auth.signUp(_username, _password);
      setUsername(_username);
      setPassword(_password);
      return { success: true, message: '' };
    } catch (error) {
      // TODO エラーコードで出力するメッセージを条件分岐させる
      return {
        success: false,
        message: '認証に失敗しました。',
      };
    }
  };

  const signIn = async (_username: string, _password: string) => {
    try {
      const result = (await Auth.signIn(_username, _password)) as UseAuth;
      setUsername(result.username);
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

  const confirmSignUp = async (verificationCode: string) => {
    try {
      await Auth.confirmSignUp(username, verificationCode);
      const result = await signIn(username, password);
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
      setUsername('');
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
    username,
    email,
    signUp,
    confirmSignUp,
    signIn,
    signOut,
  };
};

export const ProvideAuth: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
