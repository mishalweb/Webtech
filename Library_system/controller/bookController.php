<?php
include("../model/bookModel.php");

function handleRequest($action) {

    if ($action == "add") {
        addBook($_POST['title'], $_POST['author'], $_POST['category'], $_POST['status']);
    }

    if ($action == "fetch") {
        echo json_encode(getBooks());
    }

    if ($action == "update") {
        updateBook($_POST['id'], $_POST['title'], $_POST['author'], $_POST['category'], $_POST['status']);
    }

    if ($action == "delete") {
        deleteBook($_POST['id']);
    }
}
?>