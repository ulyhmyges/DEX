import Container from "../Container";
import "./ErrorPage.css";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <div id="error">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="error">
          <i>{"Error 404"}</i>
        </p>
      </div>
      <Link to={"/home"}>Go to Home
      </Link>
    </Container>
  );
};

export default ErrorPage;
