export const UPDATE = 'UPDATE'
export const updateBookmark = (bookmarks) => {
  return {
    type: UPDATE,
    bookmarks
  }
}
