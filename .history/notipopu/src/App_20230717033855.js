import popup from "./Components/notificationpopup";

function App() {
  return (
    <div className="App">
    <main>
      <h1>Notification Application</h1>
      <br/>
      <button>Notification(1)</button>
      <popup trigger={false}>
        <h3>My popup</h3>
      </popup>
      </main>
    </div>
  );
}

export default App;
