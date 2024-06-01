 // First step take hold of the id and class you need
 const title = document.getElementById("title"); // Title bar
 const description = document.getElementById("description"); // Note bar
 const addButton = document.getElementById("add"); // Button
 const noteContainer = document.getElementById("note-container"); // Parent container

 // Adding event listener to the button for functionality
 addButton.addEventListener("click", () => {
     // Creating a container for the new note
     const noteDiv = document.createElement("div");
     noteDiv.classList.add("note-header-left");

     // Creating the title
     const h2 = document.createElement("h2");
     h2.textContent = title.value;
     //h2.classList.add("note-title");

     // Creating the description
     const p = document.createElement("p");
     p.textContent = description.value;
    // p.classList.add("note-description");

     // Creating the icon delete button
     const iconButton = document.createElement("ion-icon");
     iconButton.classList.add("note-header-right");
     iconButton.setAttribute("name", "trash-outline");

     // Deleting the note when user clicks on the icon button
     iconButton.addEventListener("click", () => {
         noteDiv.remove();
     });

     // Appending all the elements to the note container
     noteContainer.appendChild(noteDiv);
     noteDiv.appendChild(h2);
     noteDiv.appendChild(p);
     noteDiv.appendChild(iconButton);
    

     // Clear the input fields after adding the note
     title.value = "";
     description.value = "";
 });