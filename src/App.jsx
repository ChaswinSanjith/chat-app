import ChatList from "./components/ChatList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <input className="search" placeholder="Search..." />
      <ChatList />
    </div>
  );
}

export default App;