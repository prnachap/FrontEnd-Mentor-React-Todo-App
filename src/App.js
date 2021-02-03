import "./App.scss";
import Header from "./components/header/Header";
import TodoState from "./context/todo/TodoState";

function App() {
  return (
    <TodoState>
      <div className="App">
        <Header />
      </div>
    </TodoState>
  );
}

export default App;
