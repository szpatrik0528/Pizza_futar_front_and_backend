<?php

$putdata = fopen("php://input", "r");
$raw_data= '';
while($chuck = fread($putdata, 1024))
    $raw_data .= $chuck;

fclose($putdata);
//$azon=$_POST["azon"];
$adatJSON = json_decode($raw_data);
$fazon = $adatJSON->fazon;
$fnev = $adatJSON->fnev;
$ftel = $adatJSON->ftel;
require_once("./databaseconnect.php");
$sql = 'UPDATE futar SET fnev=?, ftel=? WHERE fazon=?';
$stmt = $connection->prepare($sql);
$stmt->bind_param("ssi", $fnev, $ftel, $fazon);
if ($stmt->execute()) {
    http_response_code(201);
    echo 'Sikeresen update';
} else {
    http_response_code(404);
    echo 'Sikertelen update!';
}