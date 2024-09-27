import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/ROUTES";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import logo from "./assets/Logo.png";

export const AppContext = React.createContext({});

function App() {
  return (
    <AppContext.Provider value={{}}>
      <BrowserRouter>
        <div className="flex flex-col w-screen h-screen bg-lavender-100">
          <div className="w-screen h-32 bg-lavender-100 flex justify-center items-center">
            <img src={logo} className="w-36 h-28" />
          </div>
          <div className="border-mint-300 border-0 border-t-2 mb-3"></div>
          <div className="border-coral-400 border-0 border-t-2">
            <Routes>
              <Route path={ROUTES.Cart} element={<Cart />} />
              <Route path={ROUTES.Home} element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
