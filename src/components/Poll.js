import React from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Container from "./Container";
import { handleAddAnswer } from "../actions/questions";
import { useDispatch } from "react-redux";

function Poll(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { authedUser, questions, users } = props;
  const question = questions[id];
  const author = question ? users[question.author] : null;

  if (!authedUser || !question || !author) {
    return <Navigate to="/404" />;
  }
  const handleAddOptionOne = (e) => {
    e.preventDefault();

    dispatch(handleAddAnswer(question.id, "optionOne"));
    navigate("/Dashboard");
  };
  const handleAddOptionTwo = (e) => {
    e.preventDefault();

    dispatch(handleAddAnswer(question.id, "optionTwo"));
    navigate("/Dashboard");
  };
  const isVotedOptionOne = question.optionOne.votes.includes(authedUser.id);
  const isVotedOptionTwo = question.optionTwo.votes.includes(authedUser.id);
  const isVoted = isVotedOptionOne || isVotedOptionTwo;
  const calcPercentage = (option, question) => {
    const optionOneVote = question.optionOne.votes.length;
    const optionTwoVote = question.optionTwo.votes.length;

    const TotalVotes = optionOneVote + optionTwoVote;
    switch (option) {
      case "optionOne":
        return ((optionOneVote / TotalVotes) * 100).toFixed(2) + " %";
      case "optionTwo":
        return ((optionTwoVote / TotalVotes) * 100).toFixed(2) + " %";
      default:
        return "";
    }
  };
  return (
    <div>
      <Container>
        <div className="mx-auto max-w-screen-sm mt-12 text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Poll by {question.author}
            <div className="flex justify-center">
              <img
                class="rounded-full w-1/5 p-5"
                src={users[question.author].avatarURL}
                alt={question.author}
              />
            </div>
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Would you rather?
          </p>
        </div>

        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center justify-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Option One
              </h3>

              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                {question.optionOne.text}
              </p>
              {!isVoted && (
                <button
                  onClick={handleAddOptionOne}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Click
                </button>
              )}
              {isVoted && (
                <>
                  <p className="text-gray-500 dark:text-gray-400">
                    voting results: {calcPercentage("optionOne", question)}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {question.optionOne.votes.length} votes
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="items-center justify-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Option Two
              </h3>

              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                {question.optionTwo.text}
              </p>
              {!isVoted && (
                <button
                  onClick={handleAddOptionTwo}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Click
                </button>
              )}
              {isVoted && (
                <>
                  <p className="text-gray-500 dark:text-gray-400">
                    voting results: {calcPercentage("optionTwo", question)}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {question.optionTwo.votes.length} votes
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
// const mapStateToProps = ({ authedUser, users, questions }) => {
//   try {
//     const question = Object.values(questions).find(
//       (question) => question.id === useParams().id
//     );
//     const author = Object.values(users).find(
//       (user) => user.id === question.author
//     );
//     const isVotedOptionOne = question.optionOne.votes.includes(authedUser.id);
//     const isVotedOptionTwo = question.optionTwo.votes.includes(authedUser.id);
//     const isVoted = isVotedOptionOne || isVotedOptionTwo;
//     return { authedUser, users, questions, question, isVoted, author };
//   } catch (e) {
//     return <Navigate to="/404" />;
//     // throw new Error(`Question or user is not found.\n ${e}`);
//   }
// };
function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(Poll);
