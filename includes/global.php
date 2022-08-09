<?PHP
    require_once('header.php');
require_once('functions.php');
require_once('dbConnection.php');

if (session_status() !== 2)
{
    session_start(); //Starting session.
}

