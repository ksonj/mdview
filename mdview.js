// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
      file: 'showdown.min.js'
    },
    function() {
      // Guaranteed to execute only after the previous script returns
      chrome.tabs.insertCSS({
        file: 'markdown10.css'
      });
      chrome.tabs.executeScript({
        file: 'render.js'
      });
    });
});
