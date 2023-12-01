import React from 'react';


//Defining the BookList component 
function BookList({ books, removeBook }){
    return(
        <ul>
            
            
            {/* props.books.map: This is using the map function to iterate over each book 
            in the props.books array. */}
            {/* (book, index) => (...): This is an arrow function that takes two parameters: book (the current book in the iteration) 
            and index (the index of the current book in the array). */}
            {/* key={index}>>  assigns the index of each book as its unique identifier. */}
            {/* The key provides a way for React to identify each element uniquely in the list. Without it, React might have to re-render the entire list when there's a change. */}
            {/* React uses the key to efficiently update the DOM when the list changes. It helps React understand which items were added, removed, or re-ordered. */}
            {books.map((book) =>{
                return(
                // books={books}, it means passing the array stored in the variable books as a property named books to the BookList component.
                <li key={book.id}>
                {book.title}
                <button onClick={() => removeBook(book.id)}>X</button>
                </li>
                )
            })}
        </ul>
    );
}

export default BookList;