import React from 'react';
import { ItemFilter } from '../1_atoms/ItemFilter';
import { TypeTeam } from '../utils/TypeDefinitions';

export interface Props {
  itemList: string[];
  testHook: React.Dispatch<React.SetStateAction<TypeTeam[]>>;
}

const FilterView: React.FC<Props> = (props: Props) => {
  const { itemList, testHook } = props;

  return <ItemFilter itemList={itemList} testHook={testHook} />;
};

export { FilterView };
