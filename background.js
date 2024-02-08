chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.create({
    'url': chrome.runtime.getURL("index.html")
  });
});

const changeNewTab = document.getElementById("changeNewTab").checked;
if (changeNewTab == true) {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url === "chrome://newtab/") {
      document.body.style.backgroundImage = "url('/images/newtab.png')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
    }
  });
}
