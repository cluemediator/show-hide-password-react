import React, { useState } from 'react';
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';

function App() {

  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <div className="App">
      <h3>Show and hide password in React - <a href="https://www.cluemediator.com/" target="_blank">Clue Mediator</a></h3>

      <div className="pwd-container">
        <input
          name="pwd"
          placeholder="Enter Password"
          type={isRevealPwd ? "text" : "password"}
          value={pwd}
          onChange={e => setPwd(e.target.value)}
        />
        <img
          title={isRevealPwd ? "Hide password" : "Show password"}
          src={isRevealPwd ? hidePwdImg : showPwdImg}
          onClick={() => setIsRevealPwd(prevState => !prevState)}
        />
      </div>

    </div>
  );
}

export default App;
