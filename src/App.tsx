import { Route, Routes } from "react-router-dom";
import Baselayout from "./components/custom/Baselayout";
import Destination from "./pages/destination";
import Home from "./pages/home";

export default function App() {
  return (
    <Routes>
      <Route element={<Baselayout></Baselayout>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/destination"
          element={<Destination></Destination>}
        ></Route>
      </Route>
    </Routes>
  );
}
