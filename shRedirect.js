/*
 *  GLOBAL VAR
 */

var baseURL = "https://sci-hub.tw/";

// Firefox always has both chrome and browser objects, Chrome has only chrome
var browser = browser || chrome

function openSciHubTab(tab) {
    if ( tab.active ){
        browser.tabs.create({
            url: baseURL + escape(tab.url)
        });
    }
}

/*
 *  EVENT LISTENER
 */

// Listener
browser.browserAction.onClicked.addListener(function(tab) { openSciHubTab(tab) });
