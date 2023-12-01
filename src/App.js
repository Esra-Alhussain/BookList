// import logo from './logo.svg';
// import './App.css';
// Importing React module
// useState hook is to make the list of books dynamic
import React, { useState, useEffect } from 'react';
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
// initial state for books is an array of objects
  const [books, setBooks] = useState([
    { id: 1, title: "Book A" },
    { id: 2, title: "Book B" },
    { id: 3, title: "Book C" },
   ]); // The books state is initialized with an array of pre-defined books

   useEffect(() => {
    // Fetch books from the API when the component mounts
    fetch("https://6557a470bd4bcef8b613033f.mockapi.io/BookList")
    .then((response) => response.json())
    .then((data) => setBooks(data));
   }, []);
   // addBook function is to update the current state of books with a new book
  const addBook = (newBook) => {
    //update the books state by adding a new book to the existing array of books.
    fetch("https://6557a470bd4bcef8b613033f.mockapi.io/BookList",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({ title:newBook}),
    })
      .then((response) => response.json())
      .then((data => setBooks([...books, data])))
    };
    // setBooks([...books, newBook]);
   
  //the removeBook function ensures that when a book is removed, it creates a new array with that book 
  //removed and then updates the state with the new array.
   
   // Function to remove a book from the list
   const removeBook = (id) => {
    // Remove a book from the API and update the state
    fetch(`https://6557a470bd4bcef8b613033f.mockapi.io/BookList/${id}`, {
      method: "DELETE",
    })
      .then(() => setBooks(books.filter((book) => book.id !== id)))
  
    //1: Create a copy array of the existing array of books
    // The spread operator (...) is used to create a shallow copy of the array
    // const updatedBooks =[...books];
    // 2: Use the filter method to remove the book at the specified id
    //splice method is used to modify the array. It takes two arguments:
    //the index at which to start changing the array and the number of elements to remove.
    // updatedBooks = updatedBooks.filter((book) => book.id !== id);
    //3: Update the state with the modified array of books
    // setBooks(updatedBooks);
   };




   return (
    <div>
      <h1>My Favourite Books</h1>
      <p>Welcome to my book list page!</p>
      {/* Render the AddBookForm component and pass the addBook function as a prop */}
      {/* AddBookForm component is to allow users to input new books */}
      <AddBookForm addBook={addBook}/>
      
      {/* Adding the BookList component */}
      {/* Render the BookList component and pass the books array and removeBook function as props */}
      {/* Display the BookList component & Passing the list of books (Array) as props to BookList component  */}
      <BookList books={books} removeBook={removeBook}/>
    </div>
  );
}
// This will inform React of the state change, and React will then schedule a re-render of the component with the updated state. This ensures that React's virtual DOM is updated correctly and that your UI reflects the current state of your application.
export default App;


// "props" is short for "properties." Props are a way 
// of passing data from a parent component to a child component. Think of props as information that a parent wants to share with its child.