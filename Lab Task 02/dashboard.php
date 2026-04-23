<?php
session_start();

if(!isset($_SESSION['user'])){
    header("Location: login.php");
    exit();
}
?>

<link rel="stylesheet" href="style.css">

<div class="container">

<h2>Welcome, <?php echo $_SESSION['user']; ?> 🎉</h2>

<?php
if(isset($_COOKIE['last_login'])){
    echo "<p>Last Login: " . $_COOKIE['last_login'] . "</p>";
}
?>

<br>
<a href="logout.php">Logout</a>

</div>