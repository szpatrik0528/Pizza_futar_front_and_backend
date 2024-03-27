<?php

if (count($keresSzoveg) > 0) {
    
        $sql = 'DELETE FROM futar WHERE fazon=' . $keresSzoveg[1];
        var_dump($sql);
}else {
        http_response_code(404);
        echo "Nem létező futar!";

}
require_once './databaseconnect.php';

if ($result = $connection->query($sql)) {
    http_response_code(200);
    echo 'Sikeres törlés!';
} else {
    http_response_code(404);
    echo 'Sikertelen törlés!';
}
