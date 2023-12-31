import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
function Error404() {
  const navigate = useNavigate();
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-white">
            404
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <button
            type="button"
            onClick={() => {
              // <Navigate to="/Dashboard" replace={true} />;
              navigate("/Dashboard");
            }}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Back to Homepage
          </button>

          {/* < to="/Dashboard">Back to Homepage</Link> */}
        </div>
      </div>
    </section>
  );
}
const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Error404);
