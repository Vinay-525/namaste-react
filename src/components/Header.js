import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [logo, setLogo] = useState("");
  const [buttonText, setButtonText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const userInfo = useContext(UserContext);

  useEffect(() => {
    setLogo(LOGO_URL);
  }, []);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-100">
      <div className="logo-container">
        {logo === "" ? (
          <ShimmerCard height="100px" width="100px" />
        ) : (
          <img className="w-32" src={LOGO_URL} />
        )}
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">{userInfo.loggedInUserName}</li>
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
