<?PHP
$GLOBALS['currentScriptPath'] = __FILE__;
require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/global.php');
updateURL($GLOBALS['currentScriptPath']);


?>


<div>
    
</div>



<?PHP if (!isset($_REQUEST['onlyMainContent']) || $_REQUEST['onlyMainContent'] != '') require_once('includes/footer.php'); ?>