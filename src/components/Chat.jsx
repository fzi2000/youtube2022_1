import React, {useContext,useState} from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from '../Context/ChatContext'
import Video from "./Video";
import { Link } from "react-router-dom";

const Chat = () => {
  const { data } = useContext(ChatContext);
console.log(data);

const [isVideoVisible, setVideoVisible] = useState(false);
// const history = useHistory(); // Initialize useHistory

const handleCamClick = () => {
  setVideoVisible(!isVideoVisible);
  // if (!isVideoVisible) {
  //   // Navigate to /video when cam icon is clicked
  //   history.push("/video");
  // }
};
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        <Link to="/video"> 
            <img src={Cam} alt="" />
          </Link>
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      
      </div>
      <Messages/>
      <Input/>
      {isVideoVisible && <Video />}
    </div>
  );
};

export default Chat;


