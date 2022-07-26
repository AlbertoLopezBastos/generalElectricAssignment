import { useState } from 'react'
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import { iBookCard } from './components/BookCard/BookCard';
import BooksData from './books.json';
import './App.css';


function App() {

  const [filteredBooks, setFilteredBooks] = useState<iBookCard[]>([]);

  const handleClick = (searchValue : string) => { 

    // regex to remove punctuation.
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    const result =  BooksData.books.filter(value => {
      if(searchValue === ""){
        return value
      }

      // it filters only by title and author, but it could easily filter by any other property just by adding more conditions in this else if
      else if(value.title.replace(regex, '').toLowerCase().includes(searchValue.toLowerCase()) ||
              value.author.replace(regex, '').toLowerCase().includes(searchValue.toLowerCase())){
        return value;
      }
    });

    setFilteredBooks(result);
  }; 

  return (
    <div className="App">
      <SearchBar handleClick={handleClick}/>

      <div className="container">
        {filteredBooks.map((book :iBookCard, idx) => {
          return (
            <BookCard 
            key={idx}
            isbn={book.isbn} 
            title={book.title}
            subtitle={book.subtitle}
            author={book.author}
            published={book.published}
            image={book.image}
            description={book.description}
            genres={book.genres}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
