import Navbar from "./Components/Navbar";
import CarbonFootprint from "./Pages/CarbonFootprint";
import Result from "./Pages/Result";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const routes = [
    {
      path: "/",
      element: (
        <div>
          <Navbar></Navbar>
          <CarbonFootprint></CarbonFootprint>
        </div>
      ),
    },
    {
      path: "/result",
      element: (
        <div>
          <Navbar></Navbar>
          <Result></Result>
        </div>
      ),
    },
  ];

  const renderedRoutes = routes.map((r) => {
    return <Route path={r.path} element={r.element}></Route>;
  });

  return (
    <Router className="App">
      <Routes>{renderedRoutes}</Routes>
    </Router>
  );
}

export default App;
