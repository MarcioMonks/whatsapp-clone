import React from "react";
import "./ChatWindow.css";

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ChatWindow = () => {
  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img className="chatWindow--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
          <div className="chatWindow--name">Márcio Monks</div>
        </div>

        <div className="chatWindow--headerbuttons">
            <div className="chatWindow--btn">
              <SearchIcon fontSize="small" style={{ color: '#919191' }} />
              <AttachFileIcon fontSize="small" style={{ color: '#919191' }} />
              <MoreVertIcon fontSize="small" style={{ color: '#919191' }} />
            </div>
        </div>
      </div>
      <div className="chatWindow--body">

      </div>
      <div className="chatWindow--footer">

      </div>
    </div>
  );
};

export default ChatWindow;
