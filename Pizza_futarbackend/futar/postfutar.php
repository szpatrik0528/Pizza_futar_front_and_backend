<?php

$nev = $_POST["fnev"];
$telefon = $_POST["ftel"];
require_once("./databaseconnect.php");
$sql = 'INSERT INTO futar(fazon, fnev, ftel) VALUES (NULL,?,?)';
$stmt = $connection->prepare($sql);
$stmt->bind_param("ss", $nev, $telefon);
if ($stmt->execute()) {
    http_response_code(201);
    echo 'Sikeresen hozzáadva';
} else {
    http_response_code(404);
    echo 'Sikertelen hozzáadás!';
}

