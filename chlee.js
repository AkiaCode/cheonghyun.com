var div = document.createElement("video")
div.autoplay = true
div.muted = true
div.loop = true
div.id = 'myVideo'
document.body.children[0].replaceWith(div)
div.innerHTML='<source src="' + chrome.runtime.getURL("video.mp4") +'" type="video/mp4">'