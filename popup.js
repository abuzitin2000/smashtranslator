// Initialize the buttons
let translateButton = document.getElementById("smashtranslate");

// When the button is clicked
translateButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: translateSmash,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function translateSmash() {
  console.log("Translating...");

  let translation_data = {
    "0 to death": "touch of death",
    "aerial attack": "air normal",
    "chain grab": "throw loop",
    "crew battle": "team battle",
    "ditto": "mirror match",
    "knockback": "pushback",
    "perfect shield": "just block",
    "powershield": "just block",
    "sex kick": "air normal with long active frames",
    "shield": "block",
    "stock": "health",
    "tilt attack": "normal",
    "end lag": "recovery",
    "ending lag": "recovery",
    "start-up Lag": "start-up frames",
    "startup Lag": "startup frames",
    "cash battle": "money match",
    "jump squat": "pre jump",
    "paid skill": "dlc",
    "againsies": "runback",
    "rootie tootie point and shootie": "gun",
    "mama mia": "wake up dp",
    "guessie": "mixup",
    "messy guessie": "really good mixup"
  }

  let elements_a = [...document.getElementsByTagName("a")];

  let elements_b = [...document.getElementsByTagName("b")];

  let elements_span = [...document.getElementsByTagName("span")];

  let elements_p = [...document.getElementsByTagName("p")];

  let elements_h1 = [...document.getElementsByTagName("h1")];

  let elements_div = [...document.getElementsByTagName("div")];

  let elements = [...elements_a, ...elements_b, ...elements_span, ...elements_p, ...elements_h1, ...elements_div];

  elements.forEach(element => {
    for (let node of element.childNodes) {
      if (node.nodeType == Node.TEXT_NODE) {
        for (let [key, value] of Object.entries(translation_data)) {
          var esc = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          var reg = new RegExp(esc, 'ig');
          node.data = node.data.replace(reg, value);
        }
      }
    }
  });

  console.log("Translation finished");
}