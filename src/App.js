import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import SwitchTheme from "./Components/SwitchTheme";

function App() {
  return (
    <div className="App">
      <Header />
      <SwitchTheme />
      <Outlet />
    </div>
  );
}

export default App;
