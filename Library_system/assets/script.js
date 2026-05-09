output += `
<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.category}</td>
    <td>${book.status}</td>
    <td>
        <button class="btn-edit" onclick="editBook(${book.id},'${book.title}','${book.author}','${book.category}','${book.status}')">Edit</button>
        <button class="btn-delete" onclick="deleteBook(${book.id})">Delete</button>
    </td>
</tr>`;