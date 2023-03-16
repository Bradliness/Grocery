<?php
$data = $_POST["data"];
$filename = "archive.html";
$file = fopen($filename, "a") or die("Unable to open file!");
fwrite($file, $data);
fclose($file);
echo "List saved to $filename";
?>
