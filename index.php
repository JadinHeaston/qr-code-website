<?PHP 

echo '
<div id="qrcode-container"></div>
<script type="module">
	import {QRCode} from "./dist/js-qrcode-es6-src.js";
	
	// an SVG image as base64 data URI will be returned by default
	let qrcode = (new QRCode()).render("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

	// append it to the DOM
	let img = document.createElement("img");
	img.alt = "QRCode";
	img.src = qrcode
	
	document.getElementById("qrcode-container").appendChild(img);
</script>
';

echo
'<div style="width: 50vw; height: 50vh;" id="qrcode-contianer"></div>';



?>