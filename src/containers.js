import { connect } from 'react-redux'
import { updateBookmark } from './actions'
import BookmarkBox from './components/bookmark-box'

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      const q = e.target.value
      chrome.runtime.sendMessage({ type: "search", query: q }, (marks) => {
        let bs = marks.map((b) => {
          return { id: b.id, title: b.title, url: b.url }
        })
        dispatch(updateBookmark(bs))
      })
    }
  }
}

export default connect(
  state => state,
  mapDispatchToProps
)(BookmarkBox)
