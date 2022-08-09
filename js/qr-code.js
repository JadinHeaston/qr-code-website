
import {QRCode, QROptions} from "/js/js-qrcode/index.js"; //Adding QR Code library.

let defaultQR = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

//Setting QR Code options.
let $options = new QROptions();
// if set to false, the light modules won't be rendered
$options.drawLightModules = false;

//Waiting for window to load to ensure content is there to add to.
window.onload = () => {
    //Stop if this page does not have the element.
    if (document.getElementById("qrcode-input") === null)
        return;

    //Initial QR Code.
    updateQRCode(defaultQR);

    //Creating a listener on the URL entry input.
    //When triggered, it will re-render the QR Code
    document.getElementById("qrcode-input").addEventListener('input', function (event) {
        updateQRCode(this.value);
    });
};


//Re-renders the provided text.
function updateQRCode(givenText)
{
    //Handling empty values.
    if (givenText === "")
        givenText = defaultQR;

    let $qrcode  = new QRCode($options); //Creating QRCode object.

    let qrcode = $qrcode.render(givenText); //An SVG image as base64 data URI will be returned.

    //Append it to the DOM via an IMG tag.
    let img = document.createElement("img");
    img.alt = "QRCode";
    img.src = qrcode

    //Add IMG to container.
    document.getElementById("qrcode-container").replaceChild(img, document.getElementById("qrcode-container").firstElementChild);
}