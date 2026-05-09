<?php
include("../config/db.php");

// Insert
function addBook($title, $author, $category, $status) {
    global $conn;
    $sql = "INSERT INTO books(title, author, category, status)
            VALUES('$title','$author','$category','$status')";
    return mysqli_query($conn, $sql);
}

// Get All
function getBooks() {
    global $conn;
    $result = mysqli_query($conn, "SELECT * FROM books");
    return mysqli_fetch_all($result, MYSQLI_ASSOC);
}

// Update
function updateBook($id, $title, $author, $category, $status) {
    global $conn;
    $sql = "UPDATE books SET
            title='$title',
            author='$author',
            category='$category',
            status='$status'
            WHERE id=$id";
    return mysqli_query($conn, $sql);
}

// Delete
function deleteBook($id) {
    global $conn;
    return mysqli_query($conn, "DELETE FROM books WHERE id=$id");
}
?>