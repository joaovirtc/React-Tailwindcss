import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
// import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
