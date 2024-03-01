import React from 'react';
import { TypeTeam } from '../utils/TypeDefinitions';
import * as dummy from '../utils/DummyData';

interface Props {
  itemList: string[];
  testHook: React.Dispatch<React.SetStateAction<TypeTeam[]>>;
}

const ItemFilter: React.FC<Props> = (props: Props) => {
  const { itemList, testHook } = props;

  return (
    <div>
      <select
        defaultValue={itemList[0]}
        onChange={() => testHook(dummy.teamList1)}
      >
        {itemList.map((item: string) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export { ItemFilter };
