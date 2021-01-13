<?php
   include("connection.php");
   session_start();
     $mysqli = new mysqli("remotemysql.com", "B2gJS6K4Zk", "nkcJBNKkdP", "B2gJS6K4Zk",3306);
  if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      
      $myusername = mysqli_real_escape_string($db,$_POST['lemail']);
      $mypassword = mysqli_real_escape_string($db,$_POST['lpwd']); 
      if($myusername=='admin' AND $mypassword=='admin'){
           header("location: admin.php");
      }
      $sql = "SELECT id FROM users WHERE email = '$myusername' and password = '$mypassword'";
      $result = mysqli_query($db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['active'];
      
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
      
      if($count == 1) {
         $cc=$mysqli->query("SELECT id FROM users WHERE email = '$myusername' and password = '$mypassword'");
          $rot = mysqli_fetch_assoc($cc);
          $ids=$rot['id'];
         $_SESSION["uid"] = $ids;
         header("location: index.html");
      }else {
         $error = "Your Login Name or Password is invalid";
      }
   }
?>