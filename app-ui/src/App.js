import React from 'react';
import './App.css';
import AddClientPageRedux from "./container/editdata/AddClientPage";
import AddTransactionPageRedux from "./container/editdata/AddTransactionPage";

function App() {
  return (
      <div>
        <AddClientPageRedux/>
        <AddTransactionPageRedux/>
      </div>
  )
}

export default App;
