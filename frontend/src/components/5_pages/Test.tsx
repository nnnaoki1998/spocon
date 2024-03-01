import * as React from 'react';
import { useParams } from 'react-router-dom';

const Test: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return <div>Test {id}</div>;
};

export { Test };
