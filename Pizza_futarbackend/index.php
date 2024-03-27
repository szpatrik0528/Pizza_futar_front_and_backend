<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE');

/*
 * GET http://localhost/Pizza_futarbackend/index.php?futar 
 * GET http://localhost/Pizza_futarbackend/index.php?futar/{id}
 * POST http://localhost/Pizza_futarbackend/index.php?futar
 * PUT http://localhost/Pizza_futarbackend/index.php?futar/{id}
 * DELETE http://localhost/Pizza_futarbackend/index.php?futar/{id} 
 */

$keresSzoveg = explode('/', $_SERVER['QUERY_STRING']);
if ($keresSzoveg[0] === "futar") {
    require_once 'futar/index.php';
} else {
    http_response_code(404);
    $errorJson = array("message" => "Nincs ilyen api!");
    return json_encode($errorJson);
}