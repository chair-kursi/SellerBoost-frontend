import './App.css';
import Header from './components/common/Header';
import Home from './components/common/Home';
import { BrowserRouter, Route } from "react-router-dom"
import AddStyle from './components/services/AddStyle';
import AddSkus from './components/services/AddSkus';
import EditStyle from './components/services/EditStyle';
import AddSize from './components/services/AddSize';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/style/add">
          <AddStyle />
        </Route>
        <Route exact path="/style/edit/:styleCode">
          <EditStyle />
        </Route>
        <Route exact path="/style/add/:clientId">
          <AddSkus />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addsize">
          <AddSize/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
