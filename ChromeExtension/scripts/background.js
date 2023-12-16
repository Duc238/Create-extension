// background.js
chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name == "popup");
  port.onDisconnect.addListener(function () {
    alert("Window is closed");
  });
});
