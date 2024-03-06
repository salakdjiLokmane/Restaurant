<?php
$db_connect = mysqli_connect("localhost", 'root', "informatique2003", "daw");
if (!$db_connect) {
    echo "Connection failed: ";
} else {
    echo ' connected succefully';
}
session_start();
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "INSERT INTO users (name, password) VALUES ('$username', '$password')";
    $result = mysqli_query($db_connect, $query);

    if (!$result) {
        echo "Error: ";
    }
    mysqli_close($db_connect);
}
?>
