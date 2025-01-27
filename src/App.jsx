import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefoultLayouts from "./layouts/DefoultLayouts";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import About from "./pages/About";
import Details from "./pages/Details";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider >
      <BrowserRouter>
        <Routes>
          <Route element={<DefoultLayouts/>} >
            <Route path="/" element={<HomePage />} />
            <Route path="/prodotti" element={ <Products />} />
            <Route path="/chi-siamo" element={ <About />} />
            <Route path="/dettaglio-post/:id" element={ <Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App