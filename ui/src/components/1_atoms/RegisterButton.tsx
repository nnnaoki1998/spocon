import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextData from '../../data.json';

const RegisterButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate({ pathname: '/signup' })}>
      {TextData.data.header['new-register']}
    </button>
  );
};

export { RegisterButton };
