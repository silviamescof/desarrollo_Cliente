<?php
header("Content-Type: application/json; charset=UTF-8");

$bando = $_GET['bando'];
$bando = strtolower($bando);

//Definimos los datos de conexión
$servidor = "localhost";
$usuario = "root";
$pass = "";
$bbdd = "normandia";

//Creamos la conexión
$conn = mysqli_connect($servidor, $usuario, $pass, $bbdd);

//Comprobamos la conexión
$sql = "SELECT * FROM armas WHERE bando=$bando";
$result = $conn->query($sql);

//Creamos el array de datos y lo devolvemos en formato JSON
echo json_encode(iterator_to_array($result));
?>