import {QRCode} from "/js/js-qrcode/index.js"; //Adding QR Code library.

//Waiting for window to load to ensure content is there to add to.
window.onload = () => {
    //Initial QR Code.
    updateQRCode("https://www.youtube.com/watch?v=dQw4w9WgXcQ");


    //Creating a listener on the URL entry input.
    //When triggered, it will re-render the QR Code
    document.getElementById("qrcode-input").addEventListener('input', function (event) {
        updateQRCode(this.value);
    });
};



function updateQRCode(givenText)
{
    // an SVG image as base64 data URI will be returned by default
    let qrcode = (new QRCode()).render(givenText);

    // append it to the DOM
    let img = document.createElement("img");
    img.alt = "QRCode";
    img.src = qrcode

    document.getElementById("qrcode-container").replaceChild(img, document.getElementById("qrcode-container").firstElementChild);
}


function loadScript(source)
{
    let script = document.createElement("script");
    script.src = source;
    script.async = false; //Setting this to false will result in longer loading times, but may help solve dependency issues.
    document.body.append(script);
}
