chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  switch (message.type) {
    case "recent":
      chrome.bookmarks.getRecent(5, function(marks) {
        sendResponse(marks);
      });
      break;
    case "search":
      chrome.bookmarks.search(message.query, function(marks) {
        sendResponse(marks);
      });
      break;
    default:
      console.log("unknown type");
  }
  return true;
});
