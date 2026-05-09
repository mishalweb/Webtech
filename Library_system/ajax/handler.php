<?php
include("../controller/bookController.php");

$action = $_POST['action'];
handleRequest($action);
?>