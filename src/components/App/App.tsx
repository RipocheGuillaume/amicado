import { Outlet } from "react-router-dom";
import "./App.scss";
import { useEffect } from "react";
import Header from "../elements/Header";

function App() {
  // const { status, authenticate } = useAuth();
  useEffect(() => {
    // if(Cookies.set("authToken"))
  }, []);
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
