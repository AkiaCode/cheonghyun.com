chrome.tabs.onUpdated.addListener((tabID, changeInfo, tab) => {
    if (changeInfo.status == 'complete') {
        if (new URL(tab.url).hostname !== 'www.cheonghyun.com') return
        chrome.tabs.executeScript(tabID, { file: "chlee.js", runAt: 'document_start' })
        chrome.tabs.insertCSS(tabID,  { file: 'chlee.css', runAt: 'document_start' })
    }
})