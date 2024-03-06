<?php
$db_host = 'localhost';
$db_user = 'root';
$db_pass = 'informatique2003';
$db_name = 'daw';
$db_connect = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if (!$db_connect) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo 'Connected successfully!';
}

session_start();
// require_once('ContactUs.php'); // Not needed

if (isset($_POST['Fullname']) && isset($_POST['cardNumber']) && isset($_POST['security'])) {
    $Fullname = $_POST['Fullname'];
    $cardNumber = $_POST['cardNumber'];
    $security = $_POST['security'];

    $query = "INSERT INTO payment (Fullname,cardNumber,security) VALUES ('$Fullname','$cardNumber','$security')";
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
