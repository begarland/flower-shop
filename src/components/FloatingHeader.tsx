import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { ROUTES } from "../utils/ROUTES";
import React from "react";

const tabs = [
  { title: "Home", route: ROUTES.Home },
  { title: "Shop", route: ROUTES.Shop },
  { title: "Cart", route: ROUTES.Cart },
];

const FloatingHeader = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = React.useState<string>("Home");

  return (
    <>
      <div className="w-screen h-32 flex items-center absolute">
        <div className="flex w-1/6 m-6">
          <img src={logo} className="w-24 h-24" />
        </div>
        <div className="w-5/6 flex flex-row gap-5 justify-end mr-20">
          {tabs.map((tab) => (
            <div>
              <span
                className={`${
                  tab.title === activeTab ? "border-b-4 border-mint-300" : ""
                } font-bold text-white`}
                onClick={() => {
                  setActiveTab(tab.title);
                  navigate(tab.route);
                }}
              >
                {tab.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatingHeader;
