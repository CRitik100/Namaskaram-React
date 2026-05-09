import { useRouteError } from "react-router-dom";
import { SOIL_IMG_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Error = () => {
  const errorLog = useRouteError();
  console.log(errorLog);
  return (
    <div className="errorComponent">
      <img id="soilImg" src={SOIL_IMG_URL}></img>
      <div className="errorDetails">
        <h1>{errorLog.status + " " + errorLog.statusText}</h1>
        <h2>This page is gone.</h2>
        <p id="errorMssg">Before our Planet is too, make a change.</p>
        <Link to = {"/"}>
          <button id="homePageButton">Home page</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
