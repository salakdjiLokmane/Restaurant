<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<?php
$db_host = 'localhost';
$db_user = 'root';
$db_pass = 'informatique2003';
$db_name = 'daw';
$db_connect = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$db_connect) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>
<?php
require_once('Daw.php');
// Retrieve data from the database
$sql = "SELECT name,description,price,image FROM menu";
$result = mysqli_query($db_connect, $sql);

// Fetch the first row from the result set
$row = mysqli_fetch_assoc($result);

// Get the value of column1 from the first row
$foodTitle = $row["name"];

// Close the database connection
mysqli_close($db_connect);
?>
<h2 class="food-title"><?= $foodTitle ?></h2>

<?php
// Display data in HTML table format
echo "<table>";
echo "<tr><th>name</th><th>description</th><th>price</th><th>images</th></tr>";

while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>";
    echo "<td>" . $row['name'] . "</td>";
    echo "<td>" . $row['description'] . "</td>";
    echo "<td>" . $row['price'] . "</td>";
    echo "<td>" . $row['image'] . "</td>";
    echo "</tr>";
}

echo "</table>";
?>
