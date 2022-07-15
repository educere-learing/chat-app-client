import { useState } from "react";
import "../components/join/Join.css";

const Join = () => {
  const [credential, setCredential] = useState({
    email: "",
    name: "",
    room: "",
  });
  const handleChnage = (e: any) => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };

  const handleJoin = () => {};
  console.log("name, room", credential);
  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join Chat</h1>
        <form>
          <div>
            <input
              placeholder='Email'
              className='joinInput'
              type='email'
              required
              name='email'
              onChange={(e) => handleChnage(e)}
            />
          </div>
          <br />
          <div>
            <input
              placeholder='Name'
              className='joinInput'
              type='text'
              name='name'
              required
              onChange={(e) => handleChnage(e)}
            />
          </div>
          <div>
            <input
              placeholder='Room'
              className='joinInput mt-20'
              type='text'
              name='room'
              required
              onChange={(e) => handleChnage(e)}
            />
          </div>

          <button className={"button mt-20"} type='submit' onClick={handleJoin}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
