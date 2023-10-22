import { useState } from 'react'
import Author from './components/Author'
import Book from './components/Book'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (
    <>
      <h1>Libros</h1>
      <Book id="1" title="El señor de los anillos" author="J.R.R. Tolkien" date="1954" />      
      
    </>    
  )
}

export default App
