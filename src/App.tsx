import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/ROUTES";
import Home from "./pages/Home";
import FloatingHeader from "./components/FloatingHeader";
import Hero from "./components/Hero";
import Shop from "./pages/Shop";

export const AppContext = React.createContext({});

function App() {
  return (
    <AppContext.Provider value={{}}>
      <BrowserRouter>
        <div className="flex flex-col w-screen h-screen bg-white">
          <div>
            {/* floating header and hero container */}
            <FloatingHeader />
            <Hero />
          </div>

          <div className="">
            <Routes>
              <Route
                path={ROUTES.Cart}
                element={<>Cart! this will route out to stripe</>}
              />
              <Route path={ROUTES.Shop} element={<Shop />} />
              <Route path={ROUTES.Home} element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
