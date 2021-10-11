import { useEffect, useState } from "react";

export const UserButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("JwtToken") === null) {
      setIsLoggedIn(false);
    }
  }, []);

  const logOut = () => {
    console.log("In Logout")
    localStorage.removeItem("JwtToken");
    window.location.reload();
  };

  return (
      // <Dropdown className="mt-2 mr-2">
      //   <Dropdown.Toggle variant="success">
      //     {!isLoggedIn && <FiUser className="inline-block" />}
      //     {isLoggedIn && localStorage.getItem("User")}
      //   </Dropdown.Toggle>
      //   <Dropdown.Menu>
      //     <Dropdown.Item href="/profile">Profile</Dropdown.Item>
      //     <Dropdown.Item href="/createCommunity">Create a Community</Dropdown.Item>
      //     <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
      //   </Dropdown.Menu>
      // </Dropdown>
      <select>
        
      </select>
  );
};
