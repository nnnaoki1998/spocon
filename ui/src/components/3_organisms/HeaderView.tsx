import React from 'react';
import { RegisterButton } from '../1_atoms/RegisterButton';
import { LoginButton } from '../1_atoms/LoginButton';

import './HeaderView.css';

const HeaderView: React.FC = () => (
  <div className="header-view-container">
    <h1>スポコン</h1>
    <RegisterButton />
    <LoginButton />
  </div>
);

export { HeaderView };
