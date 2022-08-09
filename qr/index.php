<?PHP
$GLOBALS['currentScriptPath'] = __FILE__;
require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/global.php');

//Check if is the link is validate.

//Check if the provided path is found in the database and needs redirected.
    //If it doesn't: return nothing or send the user to an error page.

//Track the information requested. The tracking level can be found in the database.

//Send the user to the desired page.

?>

	
<?PHP if (!isset($_REQUEST['onlyMainContent']) || $_REQUEST['onlyMainContent'] != '') require_once('includes/footer.php'); ?>