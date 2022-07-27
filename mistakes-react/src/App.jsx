import { useState } from "react";
import "./App.css";

function App() {
  // const [number, setNumber] = useState(0);
  const [input,setInput] = useState("")
  const [user, setUser] = useState({
    name: "",
    email: "",
    images:[]
  });

const changeUser = () => {
  setUser(prev => ({
    ...prev,
    name: input
  }))
}

/*   const increase = () => {
    setNumber(number + 1);
  };

  const increaseAsync = () => {
    setTimeout(() => setNumber((prev) => prev + 1),2000);
  }; */

  return (
    <div className="App">
      <h2>User description:</h2>
      <input onChange={e => setInput(e.target.value)} placeholder="enter name" value={input}/>
      <br />
      <button onClick={changeUser}>Change username</button>
      <br />
      {user && <span>Username is:{user.name}</span>}
      <br />
      <span>Username is:{user?.name}</span>
      <br />
      <span>Username is:{user.name}</span>
      <br />
   {/*    <button onClick={increase}> Increase</button><br />
      <button onClick={increaseAsync}> Increase Async</button>
      <h1>{number}</h1> */}
    </div>
  );
}

export default App;
