import "./App.css";
import Home from "./Components/Home";
// First, javascript-time-ago must be initialized with some locales:
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import { CssBaseline } from "@mui/material";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Home />
    </div>
  );
}

export default App;
