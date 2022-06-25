chrome.tabs.onUpdated.addListener((tabID, changeInfo, tab) => {
    if (changeInfo.status == 'complete') {
        if (new URL(tab.url).hostname !== 'www.cheonghyun.com') return
        chrome.scripting.executeScript({ files: ["chlee.js"], target: { tabId: tabID }})
        chrome.scripting.insertCSS({ files: ["chlee.css"], target: { tabId: tabID }})
    }
})