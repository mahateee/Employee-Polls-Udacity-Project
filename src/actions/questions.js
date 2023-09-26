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
export function addAnswerToQuestion(authedUser, qid, answer) {
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

export function handleAddAnswer(questionId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer(authedUser.id, questionId, answer).then(() => {
      dispatch(addAnswerToQuestion(authedUser.id, questionId, answer));
      dispatch(addAnswerToUser(authedUser.id, questionId, answer));
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
