import React, { useState } from 'react';

//{ addBook } is using object destructuring to directly extract the addBook prop 
//from the props object. It's equivalent to writing
// const { addBook } = props;
function AddBookForm({addBook}){
    // Step 4: Introduce state to manage user input
    //This state will be used to store the user's input for a new book
    //     1- Setting Up the State using useState hook
    const [newBook, setNewBook] = useState('');

    // Event handler to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); //Prevents the default form submission behavior
   
    // Call the (AddBook) function passed from the parent as prop with the new book title
    //to updating the parent's state with the new book title
    addBook(newBook);

    // Clear the input field after submitting
    setNewBook('');
    }

    return (
        //  Sets up the form with an onSubmit event listener that triggers the 
        //handleSubmit function when the form is submitted.
        // Associating the handleSubmit function with the form tag ensures that the form can be submitted not only by clicking the submit button
        //  but also by pressing the Enter key when an input field is focused.
        <form onSubmit ={handleSubmit}>
            {/* Implementing a simple form */}
            <label>
            <input
             type="text"
             // ensures that the input field reflects the current state value (newBook
             value={newBook}

            //  onChange event listener is triggered every time the user types something in the input field.
            //setNewBook = updates the newBook state with the new value entered by the user.
             onChange={(e) => setNewBook(e.target.value)}
             placeholder="Enter a new book"
            />
            </label>
            <button>Add Book</button>
        </form>
    )
}

export default AddBookForm;


// When the handleSubmit function is placed on the form tag:

// Users can submit the form by clicking the submit button or pressing Enter while focusing on any input field within the form.
// This is generally desirable for better accessibility and user experience.
// When the handleSubmit function is placed on the button tag directly:

// Users can submit the form by clicking the submit button, but pressing Enter might not trigger the form submission.