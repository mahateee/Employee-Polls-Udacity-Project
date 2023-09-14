import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function PollCreation(props) {
  const { authedUser } = props;
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      handleSaveQuestion({
        optionOneText: firstOption,
        optionTwoText: secondOption,
        author: authedUser.id,
      })
    );
    navigate("/Dashboard");
  };
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-4 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              would you rether
            </h1>
            <p class=" font-light text-gray-500 sm:text-xl dark:text-gray-400">
              create your own poll
            </p>
            <form
              onSubmit={handleSubmit}
              class="space-y-6 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  for="option1"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  option 1
                </label>
                <input
                  type="text"
                  name="option1"
                  id="option1"
                  value={firstOption}
                  onChange={(e) => setFirstOption(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="option 1"
                  required=""
                />
              </div>
              <div>
                <label
                  for="option2"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  option 2
                </label>
                <input
                  type="text"
                  value={secondOption}
                  onChange={(e) => setSecondOption(e.target.value)}
                  name="option2"
                  id="option2"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="option 2"
                  required=""
                />
              </div>
              <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(PollCreation);
