let first = true;

(async function () {
  while (true) {
    await sleep(100);
    let acceptButton = document.querySelector("mds-button");
    // console.log(acceptButton);
    if (acceptButton != undefined && acceptButton.getAttribute("accessible-text").includes("Add to card")) {
      if (first) {
        if (!confirm("Claim all offers?")) {
          break
        }
        first = false;
      }
      acceptButton.shadowRoot.querySelector("span > button").click();
      // console.log("Clicked!");
      while (true) {
        await sleep(100);
        let flyoutContentElements = document.querySelector("#flyoutContent").childElementCount;
        // console.log(flyoutContentElements);
        if (flyoutContentElements > 0) {
          document.querySelector('#flyoutClose').click()
          break;
        }
      }
    }
  }
  
})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}