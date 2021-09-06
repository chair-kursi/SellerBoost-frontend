import './App.css';
import Header from './components/common/Header';
import Home from './components/common/Home';
import { BrowserRouter, Route } from "react-router-dom"
import AddStyle from './components/services/AddStyle';
import AddSkus from './components/services/AddSkus';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/addstyle">
          <AddStyle />
        </Route>
        <Route exact path="/addstyle/:clientId">
          <AddSkus />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
