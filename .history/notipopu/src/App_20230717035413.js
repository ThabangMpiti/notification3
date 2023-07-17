import Popup from "./Components/notificationpopup";

function App() {
  return (
    <div className="App">
    <main>
      <h1>Notification Application</h1>
      <br/>
      <button>Notification(1)</button>
      <Popup trigger={true}>
        <h3>My popup</h3>
      </Popup>
      </main>
    </div>
  );
}

export default App;
