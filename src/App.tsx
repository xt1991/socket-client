import React from "react";
import "./App.css";
import socket from "./util/socket";

function App() {
  // check connect success
  socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });

  socket.on("disconnect", () => {
    console.log(socket.id); // undefined
  });

  //join room
  socket.emit("battle:joinRoom", "622c4d3a69cdd01ea1521fdc", (res: any) => {
    console.log(res);
  });

  //listen to server
  socket.on("send", (msg) => {
    console.log(msg);
  });

  //start battle
  const onBatlleStart = () => {
    socket.emit("battle:start", "622c4d3a69cdd01ea1521fdc");
  };
  return (
    <div className="App">
      <button onClick={onBatlleStart}>Battle Start</button>
    </div>
  );
}

export default App;
