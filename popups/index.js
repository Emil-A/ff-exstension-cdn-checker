//Chrome documentation https://developer.chrome.com/extensions/optionsV2
//Should be supported by firefox soon https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime
function openOptions(form) {
	if (browser.runtime.openOptionsPage) {
		// New way to open options pages, if supported (Chrome 42+).
		browser.runtime.openOptionsPage();
	} else {
		// Reasonable fallback.
		window.open(browser.runtime.getURL('popups/options.html'));
	}
}

function close() {
	alert("close");
	window.close();
}

function doSomething() {
	//run some function or call a content_script action
	alert("do something");
}

document.getElementById('options').addEventListener('click', openOptions);
document.getElementById('okay').addEventListener('click', close);
document.getElementById('submit').addEventListener('click', doSomething);