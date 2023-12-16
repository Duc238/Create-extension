// popup.js
document.addEventListener("DOMContentLoaded", function () {
  var openNewWindowButton = document.getElementById("openNewWindow");
  openNewWindowButton.addEventListener("click", function () {
    chrome.windows.create({
      url: "https://howkteam.vn/",
      type: "normal",
    });
  });
});
