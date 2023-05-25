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
  username: string;
  signUp: (username: string, password: string) => Promise<Result>;
  confirmSignUp: (verificationCode: string) => Promise<Result>;
  signIn: (username: string, password: string) => Promise<Result>;
  signOut: () => void;
};

const authContext = createContext({} as UseAuth);

export const useAuth = () => useContext(authContext);

const useProvideAuth = (): UseAuth => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((result) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        setUsername(result.username);
        setIsAuthenticated(true);
        setIsLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result = await Auth.signIn(_username, _password);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
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
