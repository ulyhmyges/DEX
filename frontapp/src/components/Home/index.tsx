import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/home");
  };

  return (
    <div className="Home">
      <div className="container mt-5">
        <h1 className="mb-4">Sketchy Dex</h1>
        <h5 className="mb-4">A tiny decentralized exchange</h5>
        {!user.username ? (
          <div>
            <Link to="/login" className="btn btn-primary m-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-secondary m-2">
              Sign Up
            </Link>
          </div>
        ) : (
          <div>
            <h5>Welcome</h5>
            <button onClick={handleLogout} className="btn btn-danger m-2">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="container mt-5">
//         <h1 className="mb-4">Hello, a little DEX under construction!</h1>
//       </div>
//     </div>
//   );
// }

// export default App;
