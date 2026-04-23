<?php
session_start();
include "db.php";

if(isset($_POST['login'])){

    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if($result && $result->num_rows > 0){

        $user = $result->fetch_assoc();

        if(password_verify($password, $user['password'])){

            $_SESSION['user'] = $user['name'];

            setcookie("email", $email, time() + (86400 * 7));
            setcookie("last_login", date("Y-m-d H:i:s"), time() + (86400 * 7));

            header("Location: dashboard.php");
            exit();

        } else {
            echo "Wrong password!";
        }

    } else {
        echo "User not found!";
    }
}
?>

<link rel="stylesheet" href="style.css">
<script src="script.js"></script>

<div class="container">

<h2>Login</h2>

<form method="POST" name="loginForm" onsubmit="return validateForm()">

    <input type="email" name="email" placeholder="Email"
    value="<?php echo $_COOKIE['email'] ?? ''; ?>">

    <input type="password" name="password" placeholder="Password">

    <button type="submit" name="login">Login</button>
</form>

<br>

<a href="register.php">
    <button type="button">Register Now</button>
</a>

</div>