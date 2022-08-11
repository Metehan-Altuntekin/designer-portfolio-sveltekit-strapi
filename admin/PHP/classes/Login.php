<?php

class Login
{

 public $username;
 public $password;

 private $conn;

 public function __CONSTRUCT($db)
 {
  $this->conn = $db;
 }

 public function login()
 {

  $login = $this->conn->prepare("SELECT * FROM managers WHERE ManagerUsername=? AND ManagerPassword=?");
  $login->bindParam('1', $this->username, PDO::PARAM_STR);
  $login->bindParam('2', $this->password, PDO::PARAM_STR);
  $login->execute();

  return $login;
 }
}