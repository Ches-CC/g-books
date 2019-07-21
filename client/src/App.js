import React from 'react';
import SearchPage from "./pages/Search";
import Title from "./components/Title";
import ContainerSecondary from "./components/ContainerSecondary"
import './App.css';

function App() {
  return (
    <div>
      <Title />
      <SearchPage />
      <ContainerSecondary />
    </div>
  );
}

export default App;
