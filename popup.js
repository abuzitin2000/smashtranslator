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
    "0 to Death": "Touch of Death",
    "0 to death": "touch of death",
    "Aerial Attack": "Air Normal",
    "Aerial Attacks": "Air Normals",
    "aerial attack": "air normal",
    "aerial attacks": "air normals",
    "Aerial attack": "Air normal",
    "Aerial attacks": "Air normals",
    "Air Dodge": "Air Parry",
    "Air dodge": "Air parry",
    "air dodge": "air parry",
    "Chain Grab": "Throw Loop",
    "Chain grab": "Throw loop",
    "chain grab": "throw loop",
    "Crew Battle": "Team Battle",
    "Crew battle": "Team battle",
    "crew battle": "team battle",
    "Ditto": "Mirror Match",
    "ditto": "mirror match",
    "Knockback": "Pushback",
    "knockback": "pushback",
    "Perfect Shield": "Just Block",
    "Perfect shield": "Just block",
    "perfect shield": "just block",
    "Powershield": "Just Block",
    "powershield": "just block",
    "Sex Kick": "Meaty",
    "Sex kick": "Meaty",
    "sex kick": "meaty",
    "Shield": "Block",
    "shield": "block",
    "Stock": "Health",
    "stock": "health",
    "Tilt Attack": "Normal",
    "Tilt attack": "Normal",
    "tilt attack": "normal",
    "End Lag": "Recovery",
    "End lag": "Recovery",
    "end lag": "recovery",
    "Ending Lag": "Recovery",
    "Ending lag": "Recovery",
    "ending lag": "recovery",
    "Start-up Lag": "Start-up Frames",
    "Start-up lag": "Start-up frames",
    "start-up Lag": "start-up frames",
    "Startup Lag": "Start-up Frames",
    "Startup lag": "Start-up frames",
    "startup Lag": "start-up frames"
  }
    
  let elements_a = [...document.getElementsByTagName("a")];

  let elements_span = [...document.getElementsByTagName("span")];

  let elements_p = [...document.getElementsByTagName("p")];

  let elements_h1 = [...document.getElementsByTagName("h1")];

  let elements_div = [...document.getElementsByTagName("div")];

  let elements = [...elements_a, ...elements_span, ...elements_p, ...elements_h1, ...elements_div];
  
  elements.forEach(element => {
    for (let [key, value] of Object.entries(translation_data)) {
      element.innerHTML = element.innerHTML.replace(key, value);
    }
  });

  console.log("Translation finished");
}