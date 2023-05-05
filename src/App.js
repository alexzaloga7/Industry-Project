import "./App.scss";
import PaymentInfo from "./Components/PaymentInfo";
import RecentActivity from './Components/RecentActivity';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PaymentInfo />
      </header>
      <RecentActivity />
    </div>
  );
}

export default App;
