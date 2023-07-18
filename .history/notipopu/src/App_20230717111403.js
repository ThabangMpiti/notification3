import Popup from "./Components/notificationpopup";
import record from "./Components/records.json";
import { useState } from 'react'

function App() {
  const [buttonPopup, setButtonPopup] =useState(false);
  let hold = 0;

  return (
    <div className="App">
    <main>
      <h1>Notification Application</h1>
      <br/>
      <button onClick={() => setButtonPopup(true)}>Notification(1)</button>
      {
        record.map( record => {
          return(
            <div key={record.id}>
              {record.Message},
            </div>

          )
        })
      }
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
