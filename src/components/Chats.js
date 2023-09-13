import { useContext } from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

import { AuthContext } from '../context/authContext';
import { CHAT_ENGINE_ID } from '../helpers/constants';

function Chats() {
  const { username, secret } = useContext(AuthContext);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <PrettyChatWindow
        projectId={CHAT_ENGINE_ID}
        username={username}
        secret={secret}
        style={{ height: '100vh' }}
      />
    </div>
  );
}

export default Chats;
