// ==UserScript==
// @name         Auto Open Drive Files
// @namespace    http://drive.google.com/
// @version      0.1
// @description  Automatically opens google drive files based on text in tab title
// @author       Fox's Den (github.com/FoxsDenYT)
// @run-at document-start
// @noframes
// @include *
// @icon         https://www.google.com/s2/favicons?sz=64&domain=drive.google.com
// @grant        unsafeWindow
// ==/UserScript==

(function () {
  "use strict";
  console.log("Auto Open Drive Files by Fox's Den");
  // alert(window.location.host)
  if (window.location.host == "drive.google.com") {
    var names = [
      {
        name: "title text",
        app: "app url",
      },
    ];
    var docTitle = document.title;
    names.forEach((item) => {
      console.log(item.name);
      if (
        docTitle.includes(item.name.toLowerCase) ||
        docTitle.includes(item.name) ||
        docTitle.includes(item.name.toUpperCase)
      ) {
        console.log("found")
        window.open(item.app.replace("%s", window.location.href.split("/")[5]));
        setTimeout(unsafeWindow.close, 500)
        unsafeWindow.close()
      }
    });
  }
})();
