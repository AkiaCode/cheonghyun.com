var div = document.createElement("video")
div.autoplay = true
div.muted = true
div.loop = true
div.id = 'myVideo'
document.body.prepend(div)
div.innerHTML='<source src="' + chrome.runtime.getURL("video.mp4") +'" type="video/mp4">'