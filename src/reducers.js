import { combineReducers } from 'redux'
import { UPDATE, QUERY } from './actions'

function bookmarks(state = { bookmarks: [] }, action) {
  switch (action.type) {
    case UPDATE:
      return { bookmarks: action.bookmarks }
    case QUERY:
    default:
      return state
  }
}

export const bookmarkApp = bookmarks
