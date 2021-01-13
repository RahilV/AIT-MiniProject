<!DOCTYPE html>
<html  >
<head>
  <!-- Site made with Mobirise Website Builder v4.12.4, https:// -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="generator" content="Mobirise v4.12.4, ">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
  <link rel="shortcut icon" href="assets/images/test-186x186.png" type="image/x-icon">
  <meta name="description" content="Site Builder Description">
  
  
  <title>contact us</title>
  <link rel="stylesheet" href="assets/web/assets/mobirise-icons/mobirise-icons.css">
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-grid.min.css">
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="assets/socicon/css/styles.css">
  <link rel="stylesheet" href="assets/tether/tether.min.css">
  <link rel="stylesheet" href="assets/animatecss/animate.min.css">
  <link rel="stylesheet" href="assets/dropdown/css/style.css">
  <link rel="stylesheet" href="assets/theme/css/style.css">
  <link rel="preload" as="style" href="assets/mobirise/css/mbr-additional.css"><link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">
  <!-- <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css> -->
</head>
<body>
    <section class="menu cid-s61s97ett1" once="menu" id="menu2-3">
        <nav class="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="menu-logo">
                <div class="navbar-brand">
                    
                    <span class="navbar-caption-wrap"><a class="navbar-caption text-black display-4" href="index.html">SHREEJI REAL ESTATE</a></span>
                </div>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true"><li class="nav-item">
                        <a class="nav-link link text-black display-4" href="page1.html">CONTACT US</a>
                    </li><li class="nav-item"><a class="nav-link link text-black display-4" href="page2.html">OUR PARTNERS</a></li><li class="nav-item"><a class="nav-link link text-black display-4" href="">SIGN UP/LOGIN</a></li></ul>
                
            </div>
        </nav>
    </section>

<section class="mbr-section form1 cid-s62a9fgZrv" id="form1-a">
<div style="padding-left:50px;padding-right:50px;">
    <table id="example" class="table table-striped table-bordered" style="width:100%;">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>NUMBER</th>
                <th>BHK</th>
                <th>RENT/OUT RIGHT</th>
                <th>BUDGET</th>
                <th>TIME OF RENT</th>
                <th>AREA</th>
                <th>MESSAGE</th>
            </tr>
        </thead>    
        <?php
            $mysqli = new mysqli("remotemysql.com", "B2gJS6K4Zk", "nkcJBNKkdP", "B2gJS6K4Zk",3306);
            $sql = "SELECT * FROM buyer_req";
            $result = $mysqli->query($sql);
            
            while ($row = mysqli_fetch_assoc($result)) {

                echo "<tr>";
                foreach ($row as $field => $value) 
                { 
                    echo "<td>" . $value . "</td>"; 
                }
                echo "</tr>";
            }
        ?>
    </table>
<div>
</section>
  <script src="assets/web/assets/jquery/jquery.min.js"></script>
  <script src="assets/popper/popper.min.js"></script>
  <script src="assets/bootstrap/js/bootstrap.min.js"></script>
  <script src="assets/smoothscroll/smooth-scroll.js"></script>
  <script src="assets/tether/tether.min.js"></script>
  <script src="assets/touchswipe/jquery.touch-swipe.min.js"></script>
  <script src="assets/viewportchecker/jquery.viewportchecker.js"></script>
  <script src="assets/parallax/jarallax.min.js"></script>
  <script src="assets/dropdown/js/nav-dropdown.js"></script>
  <script src="assets/dropdown/js/navbar-dropdown.js"></script>
  <script src="assets/theme/js/script.js"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
  <script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js"></script>
  <script>
        $(document).ready(function() {
            $('#example').DataTable();
        } );
  </script>
  
 <div id="scrollToTop" class="scrollToTop mbr-arrow-up"><a style="text-align: center;"><i class="mbr-arrow-up-icon mbr-arrow-up-icon-cm cm-icon cm-icon-smallarrow-up"></i></a></div>
    <input name="animation" type="hidden">
  </body>
</html>