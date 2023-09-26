import React from 'react';
import { TypeTest } from '../utils/TypeDefinitions';

import './SideView.css';

export interface Props {
  chatRooms: TypeTest;
  setChatRoomId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const onClickChatRoom = (
  chatRoomId: string | undefined,
  func: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  const id = chatRoomId || 'chatRoomId01';
  console.log(`Invoked onClickChatRoom(${id}).`);
  func(id);
};

const SideView: React.FC<Props> = (props: Props) => {
  const { chatRooms, setChatRoomId } = props;

  return (
    <div className="side-view-container">
      {chatRooms?.map((room) => (
        <div
          role="button"
          tabIndex={0}
          onClick={() => onClickChatRoom(room?.chatRoomId, setChatRoomId)}
          onKeyDown={() => onClickChatRoom(room?.chatRoomId, setChatRoomId)}
          className="side-view-item"
          key={room?.writeDateTime}
        >
          <p>{room?.chatRoomId}</p>
        </div>
      ))}
    </div>
  );
};

export { SideView };
