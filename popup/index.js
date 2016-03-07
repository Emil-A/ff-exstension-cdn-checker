/*
Given the name of a beast, get the URL to the corresponding image.
*/
function calculateSomething(beastName) {
  switch (beastName) {
    case "Frog":
      return chrome.extension.getURL("beasts/frog.jpg");
    case "Snake":
      return chrome.extension.getURL("beasts/snake.jpg");
    case "Turtle":
      return chrome.extension.getURL("beasts/turtle.jpg");
  }
}
	
/*
Listen for clicks in the popup.
Inject the according content script in the active tab.
*/
document.addEventListener("click", function(e) {
	if (!e.target.classList.contains("beast")) {
		
		chrome.tabs.executeScript(null, {
			file: "/content_scripts/action.js"
		});
		return;
	}

	var chosenBeast = e.target.textContent;
	var chosenBeastURL = beastNameToURL(chosenBeast);

	chrome.tabs.executeScript(null, {
		file: "/content_scripts/example_script.js"
	});
});
