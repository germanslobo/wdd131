// Hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 1. Create the click event listener for the Add Chapter button
button.addEventListener('click', function() {
    
    // 2. Check to make sure the input is not blank using an if block
    if (input.value.trim() !== '') {
        
        // 3. Move the element creation code inside this condition true block
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Populate the list item with the input value
        li.textContent = input.value;
        
        // Populate the delete button and add an aria-label for accessibility
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // Append the delete button to the list item, then the list item to the list
        li.append(deleteButton);
        list.append(li);

        // 4. Add an event listener to the delete button to remove the li element when clicked
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus(); // Return focus to the input field after deleting
        });

        // 5. Clean up the user interface by clearing the input value
        input.value = '';
    }
    
    // 6. Regardless of whether the input was valid or blank, send focus back to the input field
    input.focus();
});