<?php
$db_connect = mysqli_connect("localhost", 'root', "Informatique", "test");
session_start();
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "INSERT INTO user(name, password) VALUES ('$username', '$password')";
    $result = mysqli_query($db_connect, $query);

    if (!$result) {
        echo "Error: " . mysqli_error($db_connect);
    } else {
        mysqli_close($db_connect);

        // Redirect to the HTML redirect page after successful insertion
        header('Location: RedirectPage.html');
        exit();
    }
}
?>
