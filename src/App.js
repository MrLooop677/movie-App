import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import SwitchTheme from "./Components/SwitchTheme";
import { Container } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <SwitchTheme />
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
