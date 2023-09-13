import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import Container from "./Container";
import { useState } from "react";
import { Link } from "react-router-dom";
function Dashboard(props) {
  // console.log(props.answered);
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };
  return (
    <div>
      <Nav />
      <Container>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <ul
            className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
            id="defaultTab"
            data-tabs-toggle="#defaultTabContent"
            role="tablist"
          >
            <li className="mr-2">
              <button
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="true"
                onClick={() => handleTabSelect("tab1")}
                class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
              >
                Answered Questions
              </button>
            </li>
            <li className="mr-2">
              <button
                id="services-tab"
                data-tabs-target="#services"
                type="button"
                role="tab"
                aria-controls="services"
                aria-selected="false"
                onClick={() => handleTabSelect("tab2")}
                class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                New Questions
              </button>
            </li>
          </ul>
          {activeTab === "tab1" ? (
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              {props.answered.map((question) => {
                return (
                  <div className="p-8">
                    <h3 className="mb-2 text-xl font-bold dark:text-white">
                      {question.author}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {new Date(question.timestamp).toDateString()}
                    </p>
                    <button
                      type="button"
                      className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      <Link to={"questions/" + question.id}>show</Link>
                    </button>
                  </div>
                );
              })}
            </div>
          ) : null}
          {activeTab === "tab2" ? (
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              {props.unanswered.map((question) => {
                return (
                  <div className="p-8">
                    <h3 className="mb-2 text-xl font-bold dark:text-white">
                      {question.author}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {new Date(question.timestamp).toDateString()}
                    </p>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      <Link to={"questions/" + question.id}>show</Link>
                    </button>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
function mapStateToProps({ authedUser, users, questions }) {
  const answeredIds = Object.keys(users[authedUser.id].answers);
  console.log(answeredIds);
  const answered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    authedUser,
    users,
    questions,
    answered,
    unanswered,
  };
}
export default connect(mapStateToProps)(Dashboard);
