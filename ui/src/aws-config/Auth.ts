const Auth = {
  // TODO cognito情報は環境変数で管理する
  region: 'ap-northeast-1',
  userPoolId: 'ap-northeast-1_H5XpXi1Tr',
  userPoolWebClientId: '4j6kfe19s3dh6l52371flnmcn1',
  cookieStorage: {
    domain: 'localhost',
    path: '/',
    expires: 365,
    sameSite: 'strict',
    secure: true,
  },
  authenticationFlowType: 'USER_SRP_AUTH',
};

export default Auth;
