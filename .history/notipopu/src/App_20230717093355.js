import Popup from "./Components/notificationpopup";
import { useState } from 'react'

function App() {
  const [buttonPopup, setButtonPopup] =useState(false);

  return (
    <div className="App">
    <main>
      <h1>Notification Application</h1>
      <br/>
      <button onClick={() => setButtonPopup(true)}>Notification(1)</button>
      
      </main>
      <Popup trigger={buttonPopup} setTrigger=
      {setButtonPopup}>
        <h3>My popup</h3>
        <p>You have recieved a message from Mr V</p>
      </Popup>
    </div>
  );
}

export default App;