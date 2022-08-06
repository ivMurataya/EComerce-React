import Home from "./components/Routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Routes/navigation/navigation.component";
import Authentication from "./components/Routes/authentication/authentication.component.jsx";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
