<?PHP
session_start();

?>

<!-- HTML Content -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>QR Code</title>
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<link rel="stylesheet" href="css/styles.css">
		<script src="js/scripts.js" type="module"></script>
	</head>

	<body>
		<header>
				<div>
				<h1>QR Code</h1>
					
				<nav>
					<ul>
						<a href="simple-qr.php"><li><h2>Simple QR</h2></li></a>
						<a href="qr-redirect.php"><li><h2>QR Redirect</h2></li></a>
						<li class="flexBreak"></li>
						<a href="administration.php"><li><h2>Administration</h2></li></a>
					</ul>
				</nav>
			</div>
		</header>


		<main>
			<div id="qrcode-container"><img/></div>
			<input type="text" id="qrcode-input">
		</main>
		
		<footer>
			Created by Jadin Heaston
		</footer>
	</body>


</html>