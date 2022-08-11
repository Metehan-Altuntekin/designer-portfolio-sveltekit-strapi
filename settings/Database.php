<?php

class Database
{

 private $host = 'localhost';
 private $username = 'root';
 private $password = '';
 private $dbName = 'rk';
 public $conn;
public function __CONSTRUCT()
{

 try
 {
  $this->conn = new PDO("mysql:host=".$this->host.
 ";dbname=".$this->dbName.
 "; charset=utf8", $this->username . $this->password);

 }catch(PDOException $e)
 {
  echo $e->getMessage();
  exit("Something went wrong!");
 }
}
}