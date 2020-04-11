<?php
/** https://github.com/BenedictHomuth/WebTech2/tree/master/%C3%9Cbung%201/Aufgabe%201.3_b **/
$conn = new mysqli("localhost", "root", "", "webtech");

if($conn->errno){
    echo "<br>Something went wrong! ". $conn->errno . "<br>";
}

$searchTerm = $_GET["term"];
$stmt = "SELECT * FROM autocomplete WHERE sprache LIKE '%".$searchTerm."%'";


$result = $conn->query($stmt);
if($conn->error){
    echo "<br>Query failed!<br>";
}

$dataArr = [];
while($datensatz = $result->fetch_object()){
    array_push($dataArr,$datensatz->sprache);
}

echo json_encode($dataArr);

?>