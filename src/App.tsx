import React, { useEffect } from "react";
import "./App.css";
import socket from "./util/socket";

function App() {
  useEffect(() => {
    // check connect success
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.on("disconnect", () => {
      console.log(socket.id); // undefined
    });

    //join room
    socket.emit("battle:joinRoom", "62306a2629b2d43a98371525", (res: any) => {
      console.log(res);
    });

    //listen to server
    socket.on("send", (msg) => {
      console.log("------------------------");
      console.log(msg);
    });
  }, []);

  //start battle
  const onBatlleStart = () => {
    socket.emit("battle:start", "62306a2629b2d43a98371525");
  };

  return (
    <div className="App">
      <button onClick={onBatlleStart}>Battle Start</button>
    </div>
  );
}

export default App;
