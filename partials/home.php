<?php

require "./config/database.php";

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../public/output.css">
    <link rel="stylesheet" href="../public/input.css">
    <title>ContactiFy</title>
</head>
<body>
    <section class="w-full h-[100vh] p-[20px] flex flex-col" >
        <?php require "./partials/navbar.php" ?>
        <?php require "./partials/table.php" ?>
        <?php require "./partials/form.php" ?>
    </section>
</body>
<script src="./public/app.js" ></script>
</html>