import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'

export function saveQuestionAPI (question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswerAPI (authedUser, qid, answer) {
  return _saveQuestionAnswer(authedUser, qid, answer)
}

export function getUsers () {
  return Promise.all([
    _getUsers(),
  ]).then(([users]) => ({
    users,
  }))
}

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}