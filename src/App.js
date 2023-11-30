import logo from './logo.svg';
import './App.css';
// Importing React module
import React from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm'

// Defining a functional component called App
function App() {
  const books = ["Book A", "Book B", "Book C"]; // Array of books
  // JSX code for the component
  return (
    <div className="App">
      <h1>My Favourite Books</h1>
      <p>Welcome to my book list page!</p>
      
      {/* Adding the BookList component */}
      {/* Passing the list of books (Array) as props to BookList component  */}
      <BookList books={books}/>
      <AddBookForm/>
    </div>
  );
}

export default App;


// "props" is short for "properties." Props are a way 
// of passing data from a parent component to a child component. Think of props as information that a parent wants to share with its child.