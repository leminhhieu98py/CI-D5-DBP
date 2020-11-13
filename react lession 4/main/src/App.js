import React from 'react'
import DisplayUserInfo from './Components/testUserInfo'
import Clock from './Components/testClock'
import {Action} from './Components/handleEvent'
import Toggle from './Components/handleEvent'
import Login from './Components/ConditionalRendering'

function App() {
  return (
    <React.Fragment>
      <DisplayUserInfo />
      <Clock />
      <Action />
      <Toggle />
      <Login />
    </React.Fragment>

  );
}

export default App;
