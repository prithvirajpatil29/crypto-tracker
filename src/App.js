import './App.css';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Coinpage from './Pages/Coinpage';
import Backgroundimg from './Pages/Backgroundimg';
import Homepage from './Pages/Homepage';
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Backgroundimg></Backgroundimg>
    <Coinpage></Coinpage>
    <Homepage></Homepage>
    </BrowserRouter>
  );
}
export default App;