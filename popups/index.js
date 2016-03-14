//Chrome documentation https://developer.chrome.com/extensions/optionsV2
//Should be supported by firefox soon https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/openOptionsPage
function openOptions(form) {
	if (browser.runtime.openOptionsPage) {
		// New way to open options pages, if supported (Chrome 42+).
		browser.runtime.openOptionsPage();
	} else {
		// Reasonable fallback.
		window.open(browser.runtime.getURL('popups/options.html'));
	}
}

document.getElementById('options').addEventListener('click', openOptions);