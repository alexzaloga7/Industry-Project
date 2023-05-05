import "./App.scss";
import PaymentInfo from "./Components/PaymentInfo";

import RecentActivity from './Components/RecentActivity';

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";



function App() {
  return (
    <div className="App">
        <Header />

        <PaymentInfo />
        <RecentActivity />
        
    </div>
  );
}

export default App;
