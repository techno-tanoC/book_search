import { combineReducers } from 'redux'
import { UPDATE, QUERY } from './actions'

function bookmarkApp(state = { bookmarks: [] }, action) {
  switch (action.type) {
    case UPDATE:
      return { bookmarks: action.bookmarks }
    case QUERY:
    default:
      return state
  }
}

export default bookmarkApp
