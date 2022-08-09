
import {QRCode, QROptions} from "/js/js-qrcode/index.js"; //Adding QR Code library.

let defaultQR = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

//Setting QR Code options.
let $options = new QROptions();
// if set to false, the light modules won't be rendered
$options.drawLightModules = false;
// toggle base64 data URI
$options.imageBase64 = true;

//Waiting for window to load to ensure content is there to add to.
window.onload = () => {
    //Creating a listener on the URL entry input.
    //When triggered, it will re-render the QR Code
    jQuery('main').on('input', '#qrcode-input', function (event) {
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

    //Append it to the DOM via an SVG tag.
    let img = document.createElement("img");
    img.alt = "QR Code of: " + givenText;
    img.src = qrcode;
    img.id = "qr-code";

    //Add IMG to container.
    document.getElementById("qrcode-container").replaceChild(img, document.getElementById("qrcode-container").firstElementChild);
}

jQuery('body').on('click keypress', '#qr-code', function(event)
{
    var code = event.key || event.code; //Get keycode.
    if (event.type != 'click' && code != ' ' && code != 'Enter') //Check for click, space, and enter. (in that order)
        return; //If it isn't any of those, don't worry about it.
    
    //Getting QR Code data.
    var QRCodeData = document.getElementById("qr-code").getAttribute("src");
    
    //Downloading svg.
    download(QRCodeData);
});

function download(givenData) {
    //http://bl.ocks.org/curran/7cf9967028259ea032e8

    // A data URL can also be generated from an existing SVG element.
    // function svgDataURL(svg) {
    //   var svgAsXML = (new XMLSerializer).serializeToString(svg);
    //   return "data:image/svg+xml," + encodeURIComponent(svgAsXML);
    // }
    var dl = document.createElement("a");
    document.body.appendChild(dl); // This line makes it work in Firefox.
    dl.setAttribute("href", givenData);
    dl.setAttribute("download", "Generated QR Code.svg");
    dl.click();
}
