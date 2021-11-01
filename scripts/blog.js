// source from https://stackoverflow.com/questions/36146508/google-docs-iframe-how-to-customize-the-css-of-an-embedded-google-docs-iframe
// get all iframes that were parsed before this tag


var iframes = document.getElementsByTagName("iframe");


for (let i = 0; i < iframes.length; i++) {
    var url = iframes[i].getAttribute("src");
    if (url.startsWith("https://docs.google.com/document/d/")) {
        // create div and replace iframe
        let d = document.createElement('div');
        d.classList.add("embedded-doc"); // optional
        iframes[i].parentElement.replaceChild(d, iframes[i]);

        // CORS request
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            // display response
            d.innerHTML = xhr.responseText;
        };
        xhr.send();

    }

}

