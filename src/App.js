// import logo from "./assets/marvel-logo.png";
import "./App.css";
import Routes from "./config/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  fas,
  faEdit,
  faEnvelope,
  faTimes,
  faHome,
  faUserFriends,
  faBell,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  fas,
  faEdit,
  faEnvelope,
  faTimes,
  faHome,
  faUserFriends,
  faBell,
  faBriefcase
);
function App() {
  return (
    <Routes>
      <p>Page App</p>
    </Routes>
  );
}

export default App;
