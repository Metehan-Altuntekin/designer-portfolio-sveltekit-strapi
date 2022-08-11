<?php
session_start();

$response = array();

if(isset($_GET["logIn"]))
{

 $DBRoot = $_SERVER["DOCUMENT_ROOT"] . "/rk/settings/Database.php";

 require_once($DBRoot);
 require_once("../classes/Login.php");

 $db = new Database;
$login = new Login($db->conn);

$login->username = $_GET["username"];
$login->password = $_GET["password"];

if($login->login()->rowCount() > 0)
{
 $manager = $login->login()->fetch(PDO::FETCH_OBJ);

 $_SESSION["loggedIn"] = true;
 $_SESSION["order"] = $manager->Order;
 $_SESSION["username"] = $manager->ManagerUsername;
 $_SESSION["managerName"] = $manager->ManagerName;
 $_SESSION["managerSurname"] = $manager->ManagerSurname;

 $response["status"] = true;
 echo json_encode($response);
}else{
 $response["status"] = false;
 echo json_encode($response);
}
}