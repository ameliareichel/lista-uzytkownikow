import logo from './logo.svg';
import './App.css';
import './UsersList';
import UsersList from './UsersList';
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <UsersList />
    </div>
  );
}

export default App;
