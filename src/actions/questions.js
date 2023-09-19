import { _saveQuestion } from "../utils/_DATA";
import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { addAnswerToUser, addQuestionToUser } from "./users";
export const ADD_QUESTION = "ADD_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
export function addAnswerToQuestion({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
export function handleAddAnswer(info) {
  return (dispatch) => {
    saveQuestionAnswer(info)
      .then(() => {
        dispatch(addAnswerToQuestion(info));
        dispatch(addAnswerToUser(info));
      })
      .catch((e) => {
        console.warn("Error in handleToggleTweet: ", e);
        dispatch(addAnswerToQuestion(info));
        dispatch(addAnswerToUser(info));

        alert("There was an error liking the tweet. Try again.");
      });
  };
}
export function handleSaveQuestion(info) {
  return (dispatch) => {
    return saveQuestion(info).then((info) => {
      dispatch(addQuestion(info));
      dispatch(addQuestionToUser(info));
    });
  };
}
