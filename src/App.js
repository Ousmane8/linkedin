// import logo from "./assets/marvel-logo.png";
import "./App.css";
import Routes from "./config/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEdit);
function App() {
  return (
    <Routes>
      <p>Page App</p>
    </Routes>
  );
}

export default App;
