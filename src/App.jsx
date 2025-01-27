import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefoultLayouts from "./layouts/DefoultLayouts";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<DefoultLayouts/>} >
        <Route path="/" element={<HomePage />} />
        <Route path="/prodotti" element={ <Products />} />
        <Route path="/chi-siamo" element={ <About />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App