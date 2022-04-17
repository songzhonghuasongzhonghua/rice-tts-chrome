chrome.runtime.onMessage.addListener(
    (request,sender,sendResponse) => {
        chrome.tts.speak(request.text)
        sendResponse({farewell:'ok'})

 }
)