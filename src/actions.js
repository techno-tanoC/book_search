export const UPDATE = 'UPDATE'
export const updateBookmark = (bookmarks) => {
  return {
    type: UPDATE,
    bookmarks
  }
}

export const QUERY = 'QUERY'
export const queryBookmark = q => {
  return dispatch => {
    chrome.runtime.sendMessage({ type: "search", query: q }, (marks) => {
      let bs = marks.map((b) => {
        return { id: b.id, title: b.title, url: b.url }
      })
      dispatch(updateBookmark(bs))
    })
  }
}
