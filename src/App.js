import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homepage/homepage.component";
import Hats from './components/pages/hats/hats.components';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop/hats" exact component={Hats} />
      </Router>
    </div>
  );
}

export default App;
