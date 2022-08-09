<?PHP

//Updates the URL to be the current running script without reloading the page.
//It requires the path to the script using:
// getcwd() . '/' . basename(__FILE__, '.php') . '.php'
function updateURL()
{
    //Getting full server path.
    $serverPath = $_SERVER['DOCUMENT_ROOT'];
    $serverPath = str_replace('\\', '/', $serverPath); //Fixing slashes.

    //Getting FULL server path of current file.
    $currentFilePath = $GLOBALS['currentScriptPath'];
    $currentFilePath = str_replace('\\', '/', $currentFilePath); //Fixing slashes.

    $relativeURL = str_replace($serverPath, '', $currentFilePath); //Removing unrelated root parts of the path.

    echo '<script>window.history.pushState("", "", "' . $relativeURL . '");</script>'; //Changing the URL without redirecting.
}

?>