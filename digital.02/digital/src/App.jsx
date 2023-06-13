import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();

const [ctime, setCtime] = useState(time);

const UpdateTime = () => {
  time = new Date().toLocaleTimeString();
  setCtime(time);
};

setInterval(UpdateTime, 1000)
  return (
  <>
   <h1> {ctime} </h1>
   <button onClick={UpdateTime}> get time </button>
  </>
  );
};

export default App;

