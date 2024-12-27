<?php


class Database{

  private $host = "localhost";
  private $db_name = "contactiFy";
  private $user_name = "root";
  private $password = "123123321321@instance";
  public $conn;

  public function getConnection(){
      $this -> conn = null;
  
      try{
          $this -> conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->user_name, $this->password);
      }catch(PDOException $exception){
          echo "Connection error: " . $exception->getMessage();
      }
      return $this -> conn;
  }

}


$database = new Database();
$conn = $database -> getConnection();


if ($conn) {
    $query = "SELECT * FROM contactiFy.contacts;";
    $stmt = $conn->prepare($query);
    $stmt->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
} else {
    $results = [];
}


require "./classes/Crud.php";





?>