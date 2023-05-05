import "./App.scss";
import PaymentInfo from "./Components/PaymentInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";


function App() {
  return (
    <div className="App">
        <Header />
        <PaymentInfo />
    </div>
  );
}

export default App;
