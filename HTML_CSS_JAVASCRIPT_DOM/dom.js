let form = document.getElementById("student-form");
let list = document.getElementById("student-list");
let nameInput = document.getElementById("student-name");
let rollInput = document.getElementById("roll-no");
let addBtn = document.getElementById("add-btn");

let totalText = document.getElementById("total");
let attendanceText = document.getElementById("attendance");

let searchInput = document.getElementById("search");

let presentCount = 0;

/* Enable add button only when typing */
nameInput.addEventListener("input", function(){
    if(nameInput.value.trim() === "")
        addBtn.disabled = true;
    else
        addBtn.disabled = false;
});

/* Add student */
form.addEventListener("submit", function(e){
    e.preventDefault();
    let name = nameInput.value;
    let roll = rollInput.value;
    if(name === "" || roll === "") return;

    let li = document.createElement("li");
    li.classList.add("student-item");

    let span = document.createElement("span");
    span.textContent = roll + " - " + name;

    /* Present checkbox */
    let present = document.createElement("input");
    present.type = "checkbox";
    present.addEventListener("change", function(){
        if(present.checked){
            li.classList.add("present");
            presentCount++;
        }else{
            li.classList.remove("present");
            presentCount--;
        }
        updateAttendance();
    });

    /* Edit button */
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("btn-edit");
    editBtn.onclick = function(){
        let newRoll = prompt("Enter new roll:", roll);
        let newName = prompt("Enter new name:", name);
        if(newRoll && newName){
            span.textContent = newRoll + " - " + newName;
        }
    };

    /* Delete button */
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("btn-delete");
    delBtn.onclick = function(){
        let confirmDelete = confirm("Are you sure you want to delete this student?");
        if(confirmDelete){
            if(present.checked) presentCount--;
            li.remove();
            updateTotal();
            updateAttendance();
        }
    };

    li.appendChild(present);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    list.appendChild(li);

    nameInput.value="";
    rollInput.value="";
    addBtn.disabled = true;

    updateTotal();
    updateAttendance();
});

/* Total students */
function updateTotal(){
    let count = list.children.length;
    totalText.textContent = "Total students: " + count;
}

/* Attendance count */
function updateAttendance(){
    let total = list.children.length;
    let absent = total - presentCount;
    attendanceText.textContent = "Present: " + presentCount + " | Absent: " + absent;
}

/* Search students */
searchInput.addEventListener("input", function(){
    let search = searchInput.value.toLowerCase();
    let items = list.getElementsByTagName("li");
    for(let i=0;i<items.length;i++){
        let text = items[i].innerText.toLowerCase();
        if(text.includes(search))
            items[i].style.display="block";
        else
            items[i].style.display="none";
    }
});

/* Sort students */
document.getElementById("sort-btn").onclick = function(){
    let items = Array.from(list.children);
    items.sort(function(a,b){
        let nameA = a.innerText.toLowerCase();
        let nameB = b.innerText.toLowerCase();
        if(nameA < nameB) return -1;
        if(nameA > nameB) return 1;
        return 0;
    });
    items.forEach(function(item){
        list.appendChild(item);
    });
};

/* Highlight first student */
document.getElementById("highlight-btn").onclick = function(){
    let items = document.querySelectorAll(".student-item");
    items.forEach(function(i){
        i.classList.remove("highlight");
    });
    if(items.length > 0)
        items[0].classList.add("highlight");
};