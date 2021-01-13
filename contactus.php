<?php
    include("connection.php");
    $db = new mysqli("remotemysql.com", "B2gJS6K4Zk", "nkcJBNKkdP", "B2gJS6K4Zk",3306);
    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $name = mysqli_real_escape_string($db,$_POST['name']);
        $email = mysqli_real_escape_string($db,$_POST['email']);
        $phone = mysqli_real_escape_string($db,$_POST['phone']);
        $bhk = mysqli_real_escape_string($db,$_POST['bhk']);
        $type = mysqli_real_escape_string($db,$_POST['type']);
        $budget = mysqli_real_escape_string($db,$_POST['budget']);
        $time = mysqli_real_escape_string($db,$_POST['time']);
        $area = mysqli_real_escape_string($db,$_POST['area']);
        $message = mysqli_real_escape_string($db,$_POST['message']);

        $sql = "INSERT INTO buyer_req(name,email,phoneno,bhk,type_lease,budget,time,area,message) VALUES ('$name','$email','$phone','$bhk','$type','$budget','$time','$area','$message')";
        mysqli_query($db,$sql);
        header("location: page1.html");
    }
?>