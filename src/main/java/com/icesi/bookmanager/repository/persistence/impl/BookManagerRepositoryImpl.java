package com.icesi.bookmanager.repository.persistence.impl;

import com.icesi.bookmanager.repository.model.Author;
import com.icesi.bookmanager.repository.model.Book;
import com.icesi.bookmanager.repository.persistence.IBookManagerRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class BookManagerRepositoryImpl  implements IBookManagerRepository {

    List <Book> books = new ArrayList<>();
    List <Author> authors = new ArrayList<>();
    @Override
    public List<Book> listAllBooks() {
        return books;
    }

    @Override
    public List<Author> listAllAuthors() {
        return authors;
    }

    @Override
    public Book getBookById(Long id) {
        Optional<Book> book = books.stream().filter(b -> b.getId().equals(id)).findFirst();
        return book.orElse(null);
    }
    @Override
    public Book createBook(Book book) {
        books.add(book);
        return book;
    }

    @Override
    public Book updateBook(Long id, Book updatedBook) {
        Optional<Book> bookToUpdate = books.stream().filter(b -> b.getId().equals(id)).findFirst();

        bookToUpdate.ifPresent(book -> {
            book.setTitle(updatedBook.getTitle());
            book.setPublicationDate(updatedBook.getPublicationDate());
            book.setAuthor(updatedBook.getAuthor());
        });
        return bookToUpdate.orElse(null);
    }

    @Override
    public Author getAuthorById(Long id) {
        Optional<Author> author = authors.stream().filter(a -> a.getId().equals(id)).findFirst();
        return author.orElse(null);
    }
    @Override
    public Author createAuthor(Author author) {
        authors.add(author);
        return author;
    }

    @Override
    public Author updateAuthor(Long id, Author updatedAuthor) {
        Optional<Author> authorToUpdate = authors.stream().filter(a -> a.getId().equals(id)).findFirst();


        authorToUpdate.ifPresent(author -> {
            author.setName(updatedAuthor.getName());
            author.setNationality(updatedAuthor.getNationality());

        });
        return authorToUpdate.orElse(null);
    }

    @Override
    public Boolean deleteBook(Long id) {
        Optional<Book> book = books.stream().filter(b -> b.getId().equals(id)).findFirst();
        if (book.isPresent()) {
            books.remove(book.get());
            return true;
        }
        return false;
    }

    @Override
    public Boolean deleteAuthor(Long id) {
        Optional<Author> author = authors.stream().filter(a -> a.getId().equals(id)).findFirst();
        if (author.isPresent()) {
            authors.remove(author.get());
            return true;
        }
        return false;
    }
    @Override
    public List<Book> getBooksByAuthor(Long id) {
        return books.stream()
                .filter(book -> book.getAuthor().getId().equals(id))
                .collect(Collectors.toList());
    }
}
