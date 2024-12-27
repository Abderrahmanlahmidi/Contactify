<?php
  
class Crud{

  public function create($conn){

    if ($conn) {
      if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];


        echo $first_name . $last_name . $phone . $email;
  
        $query = "INSERT INTO contactiFy.contacts(nom, prenom, email, numéro_de_téléphone) VALUES('$first_name','$last_name','$phone','$email')";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        header("Refresh:0");
        
        
      }
    }
    
  }

  public function delete($infoID,$conn){
    if ($conn) {
      $query = "DELETE FROM contactiFy.contacts WHERE id='$infoID' LIMIT 1";
      $stmt = $conn->prepare($query);
      $stmt->execute();
      header("Refresh:0");
    }
  }


}

$Method = new Crud();

if (isset($_POST['deleteInfo'])) {
    $infoID = $_POST['deleteInfo'];
    $Method -> delete($infoID, $conn);
}

$Method -> create($conn);




?>