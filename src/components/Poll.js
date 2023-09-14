import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Container from "./Container";
import { handleToggleTweet } from "../actions/questions";
import { useDispatch } from "react-redux";
import Nav from "./Nav";
function Poll(props) {
  const navigate = useNavigate();
  const { question, authedUser } = props;
  console.log(question, authedUser);
  const dispatch = useDispatch();
  const handleAddOptionOne = (e) => {
    e.preventDefault();

    dispatch(
      handleToggleTweet({
        authedUser: authedUser.id,
        qid: question.id,
        answer: "optionOne",
      })
    );
    navigate("/Dashboard");
  };
  const handleAddOptionTwo = (e) => {
    e.preventDefault();

    dispatch(
      handleToggleTweet({
        authedUser: authedUser.id,
        qid: question.id,
        answer: "optionTwo",
      })
    );
    navigate("/Dashboard");
  };
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
      <Nav />
      <Container>
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Poll by {question.author}
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Would you rather?
          </p>
        </div>

        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Option One</a>
              </h3>

              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                {props.question.optionOne.text}
              </p>
              {!props.isVoted && (
                <button
                  onClick={handleAddOptionOne}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Click
                </button>
              )}
              {props.isVoted && (
                <p>voting results: {calcPercentage("optionOne", question)}</p>
              )}
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Option Two</a>
              </h3>

              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                {props.question.optionTwo.text}
              </p>
              {!props.isVoted && (
                <button
                  onClick={handleAddOptionTwo}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Click
                </button>
              )}
              {props.isVoted && (
                <p>voting results: {calcPercentage("optionTwo", question)}</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
const mapStateToProps = ({ authedUser, users, questions }) => {
  const question = Object.values(questions).find(
    (question) => question.id === useParams().id
  );
  const isVotedOptionOne = question.optionOne.votes.includes(authedUser.id);
  const isVotedOptionTwo = question.optionTwo.votes.includes(authedUser.id);
  const isVoted = isVotedOptionOne || isVotedOptionTwo;
  return { authedUser, users, questions, question, isVoted };
};

export default connect(mapStateToProps)(Poll);
