<?PHP
$GLOBALS['currentScriptPath'] = __FILE__;
require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/global.php');
updateURL($GLOBALS['currentScriptPath']);

?>

<div id="mainContent">
	<div id="qrcode-container"><img/></div>
	<input type="text" id="qrcode-input">
</div>
	
<?PHP if (!isset($_REQUEST['onlyMainContent']) || $_REQUEST['onlyMainContent'] != '') require_once('includes/footer.php'); ?>