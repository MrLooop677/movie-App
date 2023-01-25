import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import "../errorPage/errorPage.css";
const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <>
      <div className="error-page mt-5 text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button
          class="danger-btn"
          onClick={() => navigate("/", { replace: true })}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
