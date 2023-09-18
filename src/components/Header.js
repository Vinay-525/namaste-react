import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";

const Header = () => {
  const [logo, setLogo] = useState("");
  const [buttonText, setButtonText] = useState("Login");

  useEffect(() => {
    setLogo(LOGO_URL);
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        {logo === "" ? (
          <ShimmerCard height="100px" width="100px" />
        ) : (
          <img className="logo" src={LOGO_URL} />
        )}
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setButtonText(buttonText === "Login" ? "Logout" : "Login");
            }}
          >
            {buttonText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
