import popup from "./Components/notificationpopup";

function App() {
  return (
    <div className="App">
    <main>
      <h1>Notification Application</h1>
      <br/>
      <button>Notification(1)</button>
      <popup trigger={true}>
        <h3>You you have recieved a message from Mr V</h3>
      </popup>
      </main>
    </div>
  );
}

export default App;
