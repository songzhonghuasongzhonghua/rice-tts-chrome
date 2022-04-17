document.addEventListener('mouseup',function () {
   const txt = window.getSelection().toString()
//    console.log(txt);
    if(txt !== '') {
        chrome.runtime.sendMessage({text:txt},(response) => {
            console.log(response);

        })
    }
})

