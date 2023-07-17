import Popup from "./Components/notificationpopup";
import { useState } from 'react'
import Popup from './../../.history/notipopu/src/Components/notificationpopup_20230717034053';

function App() {
  const [buttonPopup, setbuttonPopup] =useState(false);

  return (
    <div className="App">
    <main>
      <h1>Notification Application</h1>
      <br/>
      <button onClick={() => setbuttonPopup(true)}>OpenPopup</button>
      <Popup trigger={true}>
        <h3>My popup</h3>
        <p>You have recieved a message from Mr V</p>
      </Popup>
      </main>
    </div>
  );
}

export default App;
