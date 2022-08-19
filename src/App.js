import Home from "./components/Routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Routes/navigation/navigation.component";
import Authentication from "./components/Routes/authentication/authentication.component.jsx";
import Shop from "./components/Routes/shop/shop.component";
import Checkout from "./components/Routes/checkout/checkout.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
