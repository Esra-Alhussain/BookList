// import logo from './logo.svg';
// import './App.css';
// Importing React module
// useState hook is to make the list of books dynamic
import React, { useState } from 'react';
// import React from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm'

//useState is a React hook that allows you to add state to functional components.
// Defining a functional component called App
function App() {
  // Step 4: Introduce state to manage the list of books
  // initializes a state variable books with an initial array and a function setBooks to update the state.
//   useState is a hook. It's a function provided by React that returns an array with two elements.
// The first element (books in this case) is the current state value.
// The second element (setBooks in this case) is a function that allows you to update the state.
// [...] to set up an initial state when the component is first rendered.
//setBooks is a function that you call with a new value to update the books state
//by passing the new value as an argument 
  const [books, setBooks] = useState([
        "Book A",
        "Book B",
        "Book C"
   ]); // The books state is initialized with an array of pre-defined books

   // addBook function is to update the current state of books with a new book
  const addBook = (newBook) => {
    //update the books state by adding a new book to the existing array of books.
    setBooks([...books, newBook]);
  };
   
   return (
    <div className="App">
      <h1>My Favourite Books</h1>
      <p>Welcome to my book list page!</p>
      
      {/* Adding the BookList component */}
      {/* Display the BookList component & Passing the list of books (Array) as props to BookList component  */}
      <BookList books={books}/>
      {/* AddBookForm component is to allow users to input new books */}
      <AddBookForm addBook={addBook}/>
    </div>
  );
}
// This will inform React of the state change, and React will then schedule a re-render of the component with the updated state. This ensures that React's virtual DOM is updated correctly and that your UI reflects the current state of your application.
export default App;


// "props" is short for "properties." Props are a way 
// of passing data from a parent component to a child component. Think of props as information that a parent wants to share with its child.