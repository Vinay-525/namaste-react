import { useEffect } from "react";

const User = ({ name, email, instagram }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("update");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user-card">
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h2>{instagram}</h2>
    </div>
  );
};

export default User;
