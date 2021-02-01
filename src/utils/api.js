import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
} from './_DATA.js'

export function saveQuestion (question) {
  return _saveQuestion(question)
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