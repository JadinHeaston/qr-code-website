<?PHP
if (isset($_REQUEST['onlyMainContent']))
    return;
?>
<!-- Header Content -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>QR Code</title>
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<link rel="stylesheet" href="css/styles.css">
		<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
		<script src="js/scripts.js" type="module"></script>
		<script src="js/qr-code.js" type="module"></script>
	</head>

	<body>
		<header>
				<div>
				<a href="/index.php"><h1>QR Code</h1></a>
					
				<nav>
					<ul>
						<a class="doNotFollowLink" href="simple-qr.php" retrieveContent="true" onlyMainContent="true"><li><h2>Simple QR</h2></li></a>
						<a class="doNotFollowLink" href="qr-redirect.php" retrieveContent="true" onlyMainContent="true"><li><h2>QR Redirect</h2></li></a>
						<li class="flexBreak"></li>
						<a class="doNotFollowLink" href="administration.php" retrieveContent="true" onlyMainContent="true"><li><h2>Administration</h2></li></a>
					</ul>
				</nav>
			</div>
		</header>
        <main>
