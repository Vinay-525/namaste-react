import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [logo, setLogo] = useState("");
  const [buttonText, setButtonText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    setLogo(LOGO_URL);
  }, []);

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        {logo === "" ? (
          <ShimmerCard height="100px" width="100px" />
        ) : (
          <img className="w-32" src={LOGO_URL} />
        )}
      </div>
      <div className="nav-items p-4 m-4">
        <ul className="flex">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
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
