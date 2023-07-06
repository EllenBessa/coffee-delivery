import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { CheckoutFilled } from "./pages/CheckoutFilled";
import { Success } from "./pages/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/CheckoutFilled" element={<CheckoutFilled />} />
      <Route path="/Success" element={<Success />} />
    </Routes>
  );
}
