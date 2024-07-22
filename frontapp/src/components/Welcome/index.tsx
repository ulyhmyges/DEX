import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useEffect } from "react";
import Container from "../Container";

export default function Welcome() {
  //const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <div>
      <Navbar />
      {/* All the other elements */}
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
