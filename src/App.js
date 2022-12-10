import { Route, Routes} from "react-router-dom";
import './App.css';
import Landing from "./components/landing/landing";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Landing/> } />
      </Routes>
    </div>
  );
}

export default App;
