<?php
$db_host = 'localhost'; // host
$db_user = 'root'; // user
$db_pass = 'informatique2003'; // mot de pass
$db_name = 'daw'; // name of table database
$db_connect = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if (!$db_connect) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo 'Connected successfully!';
}

session_start(); // commencer une session
// require_once('ContactUs.php'); // Not needed

if (isset($_POST['Email']) && isset($_POST['Message']) && isset($_POST['Name'])) {
    $email = $_POST['Email'];
    $message = $_POST['Message'];
    $name = $_POST['Name'];

    $query = "INSERT INTO contact ( Fullname, email, message) VALUES ( '$name', '$email', '$message')";
    $result = mysqli_query($db_connect, $query);

    if ($result) {
        echo 'Data inserted successfully!';
        // Redirect to a success page if needed
        // header('Location: success.php');
        // exit;
    } else {
        echo "Error: " . mysqli_error($db_connect);
    }
}
?>

<? php ?>
