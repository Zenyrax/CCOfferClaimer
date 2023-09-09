let first = true;

(async function () {
  while (true) {
    await sleep(100);
    let addButton = document.querySelectorAll(`[title="Add to Card"]`);
    if (addButton.length > 0) {
      if (first && !confirm("Claim all offers?")) {
        break
      }
      first = false;
      for (let i = 0; i < addButton.length; i++) {
        addButton[i].click();
        await sleep(100); // Prob not necessary but I don't wanna anyone's computer to freak out
      }
    }
  }
  
})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}