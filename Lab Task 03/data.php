<?php
header("Content-Type: application/json");

$students = [
    ["name" => "Mishal", "id" => "24-55979-1", "dept" => "CSE", "cgpa" => "3.97"],
    ["name" => "Atik Foysal", "id" => "23-54435-3", "dept" => "CSE", "cgpa" => "3.87"],
    ["name" => "Eeron Quabili Faisal", "id" => "23-54456-3", "dept" => "CSE", "cgpa" => "3.87"]
];

echo json_encode($students);
?>